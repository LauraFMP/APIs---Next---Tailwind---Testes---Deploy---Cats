export function formatarPreco(valor) {
  return new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(valor);
}

export function calcularDesconto(preco, percentual) {
  return preco - (preco * percentual) / 100;
}
