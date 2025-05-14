export const LinearSimples = (ano: number) => {
  // f(ano) = a × ano + b

  const coef: number = 0.0613;
  const interc: number = -120.019;

  const result: number = coef * ano + interc;

  

  return Number((Math.abs(result)).toFixed(2));
};

export const PolinomialSimples = (ano: number) => {
  const result: number = 1182.6162 - 1.2371 * ano + 0.0003 * ano ** 2;
  const valorAbsoluto: number = Math.abs(result);
  
 
  return Number(valorAbsoluto.toFixed(2));
};



export const PolinomialMultipla = (ano:number, rateDeInflacao:number) => {
  const intercepto = 2984582;
  const termoAno1 = -2.5873 * ano;
  const termoInflacao1 = -0.2329 * rateDeInflacao;
  const termoAno2 = 0.0006 * Math.pow(ano, 2);
  const termoInflacao2 = 0.0011 * Math.pow(rateDeInflacao, 2);

 

  const resultado = intercepto + termoAno1 + termoInflacao1 + termoAno2 + termoInflacao2;
  return Number((resultado/10000.5).toFixed(2));
}


