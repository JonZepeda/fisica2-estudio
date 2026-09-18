const katex = require('katex');
global.window = {};
require('./data.js');

let errCount = 0;
let tested = 0;

window.PROBLEMS_DATA.forEach((p, i) => {
  const regex = /\$\$([\s\S]*?)\$\$|\$([^$]+?)\$/g;
  let match;
  while ((match = regex.exec(p.resultado)) !== null) {
    tested++;
    const formula = (match[1] || match[2]).trim();
    try {
      katex.renderToString(formula, { throwOnError: true });
    } catch(e) {
      console.log(`[Error en Ej ${i+1} (${p.id}) resultado]: "${formula}" -> ${e.message}`);
      errCount++;
    }
  }
});

console.log(`Test completado en resultados: ${tested} fórmulas probadas, ${errCount} errores.`);
