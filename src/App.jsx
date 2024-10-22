import "./index.css"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Slide from "./components/Slider"
import Destaques from "./components/Destaques"

function App() {

  return (
    <div className="h-screen">
      <Header />
      <Slide />
      <Destaques />
      <Footer />
    </div>
  )
}

export default App
