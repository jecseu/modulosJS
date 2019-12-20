const jurosSimples = (C, i, t) => C * i * t

const montanteJurosSimples = ({jurosSimples}) => (C, i, t) => C + jurosSimples(C,i,t)

const montanteJurosCompostos = (C, i, t) => {
    return C * Math.pow((1 + i), t)
}

const juros = ({montanteJurosCompostos}) => (C, i , t) => {
    const juros =  montanteJurosCompostos(C, i, t) - C
    return Math.floor(juros)
}


module.exports = {
    jurosSimples,
    montanteJurosSimples: montanteJurosSimples({jurosSimples}),
    juros: juros({montanteJurosCompostos}),
    pure: {
        montanteJurosSimples,
        juros
    },
    montanteJurosCompostos,
    juros    
}