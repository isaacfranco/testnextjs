export default function Layout({ children }) {
  
  return (
    <div>
      <h1>Cabecalho</h1>

      {children}

      <footer>
        Rodapé
      </footer>

    </div>
  )
}