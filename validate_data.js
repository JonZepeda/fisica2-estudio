// Validador de data.js y de fórmulas LaTeX
global.window = {};
require('./data.js');

let errors = 0;
window.PROBLEMS_DATA.forEach((item, idx) => {
  ['pregunta', 'formula', 'desarrollo', 'resultado'].forEach(field => {
    const val = item[field];
    if (typeof val === 'string') {
      for (let i = 0; i < val.length; i++) {
        const code = val.charCodeAt(i);
        if ((code < 32 && code !== 9 && code !== 10 && code !== 13) || code === 65533) {
          console.log("Caracter anomalo en " + item.id + " [" + field + "]: ASCII " + code);
          errors++;
        }
      }
    }
  });
});

console.log("Total problemas:", window.PROBLEMS_DATA.length);
console.log("Total caracteres anomalos en los 75 problemas:", errors);
