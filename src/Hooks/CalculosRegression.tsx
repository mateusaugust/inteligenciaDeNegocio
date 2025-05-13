export const LinearSimples = (ano: number) => {
  // f(ano) = a × ano + b

  const coef: number = 0.0613;
  const interc: number = -120.019;

  const result: number = coef * ano + interc;

  const convertReais = Math.abs((result * 5.66));

  return Number(convertReais.toFixed(2));
};

export const PolinomialSimples = (ano: number, inflação:number) => {
  const result: number = 1182.6162 - 1.2371 * ano + 0.0003 * ano ** 2;
  const valorAbsoluto: number = Math.abs(result);
  
  const valorEmReais: number = (valorAbsoluto * 5.66)*(inflação/100);
  return Number(valorEmReais.toFixed(2));
};
