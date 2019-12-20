juros = require('./juros')

const js = juros.jurosSimples(100, 0.10, 30)

const mjs = juros.montanteJurosSimples(100,0.10, 30)

const mjc = juros.montanteJurosCompostos(100,0.10,30)

const j = juros.juros(100, 0.10, 1)

console.log(j)