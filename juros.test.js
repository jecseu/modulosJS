const juros = require('./juros')

test('jurosSimples', () => {
  const C = 100
  const i= 0.10
  const t=1
  const jurosEsperados = 10
  const juro = juros.jurosSimples(C,i,t)

  expect(juro).toBe(jurosEsperados)
})

test('montanteJurosSimples', () => {
    const C = 100
    const i= 0.10
    const t=1
    const jurosEsperados = 10
    const jurosSimples = jest.fn()
    const montanteJurosSimples = juros.pure.montanteJurosSimples({jurosSimples})  
    
    const mjs = juros.montanteJurosSimples(C,i,t)

    expect(mjs).toBe(110)
})

test('jurosCompostos', () => {
    const C = 100
    const i= 0.10
    const t=1
    const jurosEsperados = 110
    const jurosCalc = Math.round(juros.montanteJurosCompostos(C, i, t))
  
    expect(jurosCalc).toBe(jurosEsperados)
  })


test('juros', () => {
    const C = 100
    const i= 0.10
    const t=1
    const jurosEsperado = 10
    const jurosCalculado = Math.floor(juros.montanteJurosCompostos(C,i,t) - C)
  
    expect(jurosCalculado).toBe(jurosEsperado)
  })