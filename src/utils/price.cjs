function calcularDesconto(preco, percentual) { return preco - (preco * percentual) / 100; }
function formatarPreco(valor) { return new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(valor); }
module.exports = { calcularDesconto, formatarPreco };
