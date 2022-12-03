export function operar(a,b,c){
    if (b === '+') return soma(a,c);
    if (b === '-') return subtracao(a,c);
    if (b === '*') return multiplicacao(a,c);
    if (b === '/') return divisao(a,c);
  }

  function soma(a,b){
    let resultado = Number((Number(a) + Number(b)).toFixed(3))
    if (resultado > 1999999998){return('ERRO - NUM MT GRANDE')}
    else {return(resultado.toString())}    
  }
  
  function subtracao(a,b){
  let resultado = Number((Number(a) - Number(b)).toFixed(3))
    if (resultado > 1999999998){return('ERRO - NUM MT GRANDE')}
    else {return(resultado.toString())}
  }
  
  function multiplicacao(a,b){
  let resultado = Number((Number(a) * Number(b)).toFixed(3))
    if (resultado > 1999999998){return('ERRO - NUM MT GRANDE')}
    else {return(resultado.toString())}
  }
  
  function divisao(a,b){
    if (b == 0) return('L.S.D.')
    else {
        let resultado = Number((Number(a) / Number(b)).toFixed(3))
        if (resultado > 1999999998){return('ERRO - NUM MT GRANDE')}
        else {return(resultado.toString())}
    }
  }