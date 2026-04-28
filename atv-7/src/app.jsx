import './app.css'

const Navigation = () => (
  <nav className="nav-container">
    <a href="#">Artigos</a>
    <a href="#">Sobre</a>
    <a href="#">Contato</a>
  </nav>
)

const Header = () => (
  <header className="header-container">
    <h1>Blog Dev da Bia</h1>
    <Navigation />
  </header>
)

const Article = (props) => (
  <main className="main-content">
    <article>
      <h2>{props.titulo}</h2>
      <p style={{ color: '#666', margin: '10px 0' }}>
        Por: <strong>{props.autor}</strong> | {props.data}
      </p>
      <p>{props.conteudo}</p>
    </article>
  </main>
)

const Sidebar = () => (
  <aside className="sidebar-container">
    <h3>Relacionados</h3>
    <ul>
      <li>→ Aprendendo Props</li>
      <li>→ Componentes Reutilizáveis</li>
      <li>→ O futuro do Web Design</li>
    </ul>
  </aside>
)

const Footer = () => (
  <footer className="footer-container">
    <p>&copy; 2026 • Criado com React</p>
  </footer>
)

function App() {
  const dadosDoPost = {
    titulo: "A Revolução dos Componentes",
    autor: "Beatriz",
    data: "11 de Abril de 2026",
    conteudo: "Refatorar um site para React é como montar um quebra-cabeça onde cada peça tem sua própria função. Usar props nos permite criar interfaces muito mais dinâmicas e organizadas."
  };

  return (
    <div className="app-container">
      <Header />
      <Article 
        titulo={dadosDoPost.titulo} 
        autor={dadosDoPost.autor} 
        data={dadosDoPost.data} 
        conteudo={dadosDoPost.conteudo} 
      />
      <Sidebar />
      <Footer />
    </div>
  );
}

export default App;