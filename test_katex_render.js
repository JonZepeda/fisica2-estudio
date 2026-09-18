const katex = require('katex');
const fs = require('fs');

global.window = {};
require('./data.js');

let totalTested = 0;
let errors = 0;

function testFormula(latex, context) {
  if (!latex) return;
  totalTested++;
  try {
    katex.renderToString(latex, { throwOnError: true, displayMode: false });
  } catch (err) {
    console.error(`[ERROR en ${context}]:`, latex, '->', err.message);
    errors++;
  }
}

// 1. Probar formulas en data.js
window.PROBLEMS_DATA.forEach(item => {
  if (item.formula) {
    testFormula(item.formula, `${item.id} (formula)`);
  }
  // Extraer formulas entre $...$ y $$...$$ en pregunta, desarrollo, resultado
  ['pregunta', 'desarrollo', 'resultado'].forEach(field => {
    const text = item[field];
    if (!text) return;
    const regex = /\$\$([\s\S]*?)\$\$|\$([^$]+?)\$/g;
    let match;
    while ((match = regex.exec(text)) !== null) {
      const formula = match[1] || match[2];
      testFormula(formula.trim(), `${item.id} [${field}]`);
    }
  });
});

// 2. Probar formulas en index.html (excluyendo scripts de JS)
const rawIndexHtml = fs.readFileSync('index.html', 'utf-8');
const indexHtmlWithoutScripts = rawIndexHtml.replace(/<script[\s\S]*?<\/script>/gi, '');
const regex = /\$\$([\s\S]*?)\$\$|\$([^$]+?)\$/g;
let match;
while ((match = regex.exec(indexHtmlWithoutScripts)) !== null) {
  const formula = match[1] || match[2];
  testFormula(formula.trim(), `index.html`);
}

console.log(`\n========================================`);
console.log(`Fórmulas probadas: ${totalTested}`);
console.log(`Errores encontrados: ${errors}`);
console.log(`========================================`);
