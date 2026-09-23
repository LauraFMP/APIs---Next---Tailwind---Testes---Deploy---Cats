const { calcularDesconto, formatarPreco } = require("../utils/price.cjs");

test("calcula 20% de desconto", () => { expect(calcularDesconto(100, 20)).toBe(80); });
test("formata preço em reais", () => { expect(formatarPreco(19.9)).toBe("R$ 19,90"); });
