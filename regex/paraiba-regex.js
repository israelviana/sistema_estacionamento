const paraiba_regex = {
    // MMN até MOW
    placa_nova_1: /^MM[N-Z][0-9][A-Z][0-9][0-9]$/,

    placa_antiga_1: /^MM[N-Z][0-9][0-9][0-9][0-9]$/,

    placa_antiga_2: /^MN[A-Z][0-9][0-9][0-9][0-9]$/,

    placa_nova_2: /^MN[A-Z][0-9][A-Z][0-9][0-9]$/,

    placa_antiga_3: /^MO[A-W][0-9][A-Z][0-9][0-9]$/,

    placa_nova_3: /^MO[A-W][0-9][0-9][0-9][0-9]$/,

    // NPR até NQK
    placa_nova_4: /^NP[R-Z][0-9][A-Z][0-9][0-9]$/,

    placa_antiga_4: /^NP[R-Z][0-9][0-9][0-9][0-9]$/,

    placa_nova_5: /^NQ[A-K][0-9][A-Z][0-9][0-9]$/,

    placa_antiga_5: /^NQ[A-K][0-9][A-Z][0-9][0-9]$/,

    // OET até OFH
    placa_nova_6: /^OE[T-Z][0-9][A-Z][0-9][0-9]$/,

    placa_antiga_6: /^OE[T-Z][0-9][0-9][0-9][0-9]$/,

    placa_nova_7: /^OF[A-H][0-9][A-Z][0-9][0-9]$/,

    placa_antiga_7: /^OF[A-H][0-9][0-9][0-9][0-9]$/,

    // OFX até OGG
    placa_nova_8: /^OF[X-Z][0-9][A-Z][0-9][0-9]$/,

    placa_antiga_8: /^OF[X-Z][0-9][0-9][0-9][0-9]$/,

    placa_nova_9: /^OG[A-G][0-9][A-Z][0-9][0-9]$/,

    placa_antiga_9: /^OG[A-G][0-9][0-9][0-9][0-9]$/,

    // OXO
    placa_nova_10: /^OXO[0-9][A-Z][0-9][0-9]$/,

    placa_antiga_10: /^OXO[0-9][0-9][0-9][0-9]$/,

    // QFA até QFZ
    placa_nova_11: /^QF[A-Z][0-9][A-Z][0-9][0-9]$/,

    placa_antiga_11: /^QF[A-Z][0-9][0-9][0-9][0-9]$/
}

module.exports = paraiba_regex;

