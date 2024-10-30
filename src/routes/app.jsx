import "../index.css"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Slide from "../components/Slider"
import Destaques from "../components/Destaques"
import ProdutosEmAlta from "../components/Produtos"
import Jordan from "../components/Destaques/jordan"

function App() {

  return (
    <div className="h-full bg-[#F9F8FE]">
      <Header />
      <Slide />
      <div className="w-full flex flex-col items-center">
        <Destaques />
        <ProdutosEmAlta />
        <Jordan />
      </div>
      <Footer />
    </div>
  )
}

export default App
