import { useEffect, useState } from "react";
import axios from "axios";
import { formatarPreco } from "./utils/price";

export default function App() {
  const [produtos, setProdutos] = useState([]);
  const [busca, setBusca] = useState("");
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");

  async function buscarProdutos() {
    try {
      setCarregando(true);
      const resposta = await axios.get("https://fakestoreapi.com/products");
      setProdutos(resposta.data);
    } catch {
      setErro("O gatinho não conseguiu buscar os produtos. Tente novamente.");
    } finally {
      setCarregando(false);
    }
  }

  useEffect(() => { buscarProdutos(); }, []);

  const produtosFiltrados = produtos.filter((produto) => produto.title.toLowerCase().includes(busca.toLowerCase()));

  return <div className="page-shell">
    <header><a href="#inicio" className="logo">MiAU<span>.shop</span></a><p>achadinhos aprovados por patinhas</p></header>
    <main id="inicio">
      <section className="hero"><div><p className="eyebrow">&gt; aula_05 / axios</p><h1>Vitrine de produtos com charme felino.</h1><p>Produtos reais da Fake Store API, renderizados em React com muito ronronar.</p></div><div className="cat" aria-hidden="true">=^.^=</div></section>
      <section className="catalogo"><div className="catalogo-topo"><div><p className="eyebrow">api online</p><h2>Achadinhos da semana</h2></div><label>Buscar<input value={busca} onChange={(evento) => setBusca(evento.target.value)} placeholder="Digite um produto..." /></label></div>
      {carregando && <p className="status">Carregando a loja dos humanos...</p>}
      {erro && <p className="status erro">{erro}</p>}
      <div className="product-list">{produtosFiltrados.map((produto) => <article className="product-card" key={produto.id}><img src={produto.image} alt={produto.title} /><div><span>{produto.category}</span><h3>{produto.title}</h3><strong>{formatarPreco(produto.price)}</strong></div></article>)}</div>
      {!carregando && !erro && produtosFiltrados.length === 0 && <p className="status">Nenhum produto encontrou esse novelo de busca.</p>}
      </section>
    </main><footer>© 2026 Laura — Axios, React e carinho.</footer>
  </div>;
}
