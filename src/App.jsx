import "./index.css"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Slide from "./components/Slider"
import Destaques from "./components/Destaques"
import ProdutosEmAlta from "./components/Produtos/produtos-em-alta"
import Jordan from "./components/Destaques/jordan"

function App() {

  return (
    <div className="h-full bg-[#F9F8FE]">
      <Header />
      <Slide />
      {/* <div className="w-full bg-red-400 flex flex-col items-center justify-center max-w-screen-2xl"> */}
      <div className="w-full flex flex-col items-center">
        <Destaques />
        <ProdutosEmAlta />
        <Jordan />
      </div>
      {/* </div> */}
      <Footer />
    </div>
  )
}

export default App
