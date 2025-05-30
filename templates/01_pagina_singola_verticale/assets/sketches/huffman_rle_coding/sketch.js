let inputText = '';
let huffmanCodes = {};
let huffmanEncoded = '';
let rleEncoded = '';
let inputField;

function setup() {
  createCanvas(800, 700);
  createP("Huffman + RLE – Inserisci solo numeri:");
  inputField = createInput();
  inputField.input(processInput);
  textFont('monospace');
  textSize(16);
}

function processInput() {
  inputText = this.value().replace(/\D/g, '');
  if (inputText.length === 0) {
    huffmanEncoded = '';
    rleEncoded = '';
    huffmanCodes = {};
    return;
  }

  // --- Huffman Coding ---
  let freq = {};
  for (let char of inputText) {
    freq[char] = (freq[char] || 0) + 1;
  }

  let nodes = [];
  for (let char in freq) {
    nodes.push({ char, freq: freq[char], left: null, right: null });
  }

  huffmanCodes = {};
  if (nodes.length === 1) {
    if (nodes[0] && nodes[0].char) {
        huffmanCodes[nodes[0].char] = '0';
    }
  } else if (nodes.length > 1) {
      while (nodes.length > 1) {
        nodes.sort((a, b) => a.freq - b.freq);
        let left = nodes.shift();
        let right = nodes.shift();
        nodes.push({ char: null, freq: left.freq + right.freq, left, right });
      }
      if (nodes.length > 0 && nodes[0]) {
        let tree = nodes[0];
        buildCodes(tree, '');
      }
  }

  huffmanEncoded = '';
  for (let char of inputText) {
    if (huffmanCodes[char] !== undefined) {
        huffmanEncoded += huffmanCodes[char];
    }
  }

  // --- RLE on Huffman Encoded string ---
  let rleResultArray = [];
  rleEncoded = '';
  if (huffmanEncoded.length > 0) {
    let currentSymbol = huffmanEncoded[0];
    let count = 1;
    for (let i = 1; i < huffmanEncoded.length; i++) {
      if (huffmanEncoded[i] === currentSymbol) {
        count++;
      } else {
        // Modifica Richiesta 2: Formato "SimboloConteggio" senza virgola
        rleResultArray.push(`${currentSymbol}${count}`);
        currentSymbol = huffmanEncoded[i];
        count = 1;
      }
    }
    rleResultArray.push(`${currentSymbol}${count}`);

    if (rleResultArray.length > 0) {
      // Modifica Richiesta 2: Unisci con " " dopo ogni coppia "nn"
      rleEncoded = rleResultArray.map(pair => `${pair} `).join('');
    }
  }
}

function buildCodes(node, code) {
  if (!node) {
      return;
  }
  if (!node.left && !node.right) {
    if (node.char) {
        huffmanCodes[node.char] = code === '' ? '0' : code;
    }
    return;
  }
  if (node.left) {
    buildCodes(node.left, code + '0');
  }
  if (node.right) {
    buildCodes(node.right, code + '1');
  }
}

function drawScrollableText(str, x, yStartBaseline, w, h, displayLineHeight = 20) { 
  let charsPerLine = 1;
  if (textWidth('M') > 0 && w > 0) { 
      charsPerLine = Math.floor(w / textWidth('M'));
  }
  if (charsPerLine <= 0) charsPerLine = 1;

  let parts = [];
  if (str && str.length > 0) {
    const regex = new RegExp(`.{1,${charsPerLine}}`, 'g');
    parts = str.match(regex) || [];
  }
  
  let maxLines = 0;
  if (displayLineHeight > 0 && h > 0) {
      maxLines = Math.floor(h / displayLineHeight);
  }
  if (maxLines < 0) maxLines = 0;
  
  let totalLines = parts.length;
  let startDisplayLineIndex = 0; 
  if (totalLines > maxLines) {
    startDisplayLineIndex = totalLines - maxLines;
  }

  for (let i = 0; i < maxLines && (startDisplayLineIndex + i) < totalLines; i++) {
    let lineToDraw = parts[startDisplayLineIndex + i];
    if (i === 0 && startDisplayLineIndex > 0) { 
      lineToDraw = '...' + lineToDraw.slice(3);
    }
    text(lineToDraw, x, yStartBaseline + i * displayLineHeight);
  }
}

function draw() {
  background(255);
  fill(0);

  // Parametri di layout
  let topPageMargin = 20;
  let bottomPageMargin = 20;
  let xPosition = 20;
  let contentWidth = width - (2 * xPosition);

  let labelBaselineOffset = 16;
  let reservedHeightForLabelArea = 40;
  let textLineHeight = 20;

  // Modifica Richiesta 1: Riduci lo spazio dopo la sezione Input
  let gapAfterInputSection = 10; // Spazio ridotto specificamente dopo l'Input
  let gapBetweenOtherSections = 15; // Spazio per le altre sezioni (può essere uguale a gapAfterInputSection se si preferisce)


  let currentY = topPageMargin;

  // --- Sezione 1: Input (Scorrevole) ---
  let inputSectionHeight = 100; 
  text("Input:", xPosition, currentY + labelBaselineOffset);
  drawScrollableText(inputText, xPosition, currentY + reservedHeightForLabelArea, contentWidth, inputSectionHeight - reservedHeightForLabelArea, textLineHeight);
  currentY += inputSectionHeight + gapAfterInputSection; // Usa gapAfterInputSection

  // --- Sezione 2: Codici Huffman (Non Scorrevole, altezza dinamica) ---
  text("Codici Huffman:", xPosition, currentY + labelBaselineOffset);
  let huffmanTableStartY = currentY + reservedHeightForLabelArea;
  let sortedDigits = Object.keys(huffmanCodes).sort();
  let huffmanTableContentHeight = 0;
  if (sortedDigits.length > 0) {
      for (let i = 0; i < sortedDigits.length; i++) {
        let digit = sortedDigits[i];
        if (huffmanCodes[digit] !== undefined) {
            text(`${digit} → ${huffmanCodes[digit]}`, xPosition + 20, huffmanTableStartY + i * textLineHeight);
        }
      }
      huffmanTableContentHeight = sortedDigits.length * textLineHeight;
  }
  currentY += reservedHeightForLabelArea + huffmanTableContentHeight + gapBetweenOtherSections; // Usa gapBetweenOtherSections

  // Calcolo altezze per le restanti 2 sezioni scorrevoli
  let remainingCanvasHeight = height - currentY - bottomPageMargin;
  let numRemainingScrollableSections = 2;
  let heightPerRemainingSection = 0;
  let scrollableTextAreaHeight = 0;

  if (numRemainingScrollableSections > 0 && remainingCanvasHeight > 0) {
      // Il gap tra queste due sezioni rimanenti (Output Huffman e Output RLE) sarà gapBetweenOtherSections
      let totalGapHeightForRemaining = gapBetweenOtherSections * (numRemainingScrollableSections - 1);
      if (totalGapHeightForRemaining < 0) totalGapHeightForRemaining = 0;

      heightPerRemainingSection = Math.floor((remainingCanvasHeight - totalGapHeightForRemaining) / numRemainingScrollableSections);
  }
  
  if (heightPerRemainingSection > reservedHeightForLabelArea) {
      scrollableTextAreaHeight = heightPerRemainingSection - reservedHeightForLabelArea;
  }

  if (scrollableTextAreaHeight < textLineHeight && textLineHeight > 0) {
    scrollableTextAreaHeight = textLineHeight;
  } else if (scrollableTextAreaHeight < 0) {
    scrollableTextAreaHeight = 0;
  }


  // --- Sezione 3: Output Huffman (Scorrevole) ---
  if (currentY < height - bottomPageMargin - reservedHeightForLabelArea && scrollableTextAreaHeight > 0) {
    text("Output Huffman:", xPosition, currentY + labelBaselineOffset);
    drawScrollableText(huffmanEncoded, xPosition, currentY + reservedHeightForLabelArea, contentWidth, scrollableTextAreaHeight, textLineHeight);
    currentY += reservedHeightForLabelArea + scrollableTextAreaHeight + gapBetweenOtherSections; // Usa gapBetweenOtherSections
  } else {
      currentY = height; // Forza la fine del disegno se non c'è spazio
  }

  // --- Sezione 4: Output RLE su Huffman (Scorrevole) ---
   if (currentY < height - bottomPageMargin - reservedHeightForLabelArea && scrollableTextAreaHeight > 0) {
    text("Output RLE su Huffman:", xPosition, currentY + labelBaselineOffset);
    drawScrollableText(rleEncoded, xPosition, currentY + reservedHeightForLabelArea, contentWidth, scrollableTextAreaHeight, textLineHeight);
  }
} 