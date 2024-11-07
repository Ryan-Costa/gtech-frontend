import { Link } from "react-router-dom";
import carrinho from "../assets/img/carrinho.svg";
import logo from "../assets/img/logo.svg";
import lupa from "../assets/img/lupa.svg";

export default function Header() {
  return (
    <header className="w-full h-48 bg-white flex justify-center ">
      <div className="w-full flex flex-col max-w-screen-2xl">
        <div className="mr-28 ml-28 py-8 flex justify-between">
          <div className="flex items-center gap-2 justify-between w-full">
            <Link to="/">
              <img src={logo} alt="logo" className="h-10 w-60 min-w-60 mr-4" />
            </Link>

            <div className="flex items-center border border-gray-300 rounded max-w-[559px] w-full pr-4">
              <input type="text" placeholder="Pesquisar produto..." className="rounded w-full pl-4 py-2" />
              <img src={lupa} alt="Lupa" className="h-5" />
            </div>

            <div className="flex items-center gap-4">
              <button className="bg-white text-[#474747] rounded whitespace-nowrap underline">
                Cadastre-se
              </button>
              <button className="bg-[#C92071] text-[#ffffff] rounded-lg px-8 py-2">
                Entrar
              </button>
              <button className="bg-white text-[#C92071] w-8 h-8">
                <img className="w-full h-full" src={carrinho} alt="carrinho" />
              </button>
            </div>
          </div>
        </div>

        <nav className="container mt-2">
          <div className="ml-24 px-4 py-2 flex">
            <ul className="flex space-x-4">
              <li>
                <Link to="/" className="hover:underline hover:underline-offset-4 hover:font-medium hover:text-[#C92071] text-[#474747]">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/product-list" className="hover:underline hover:underline-offset-4 hover:font-medium hover:text-[#C92071] text-[#474747]">
                  Produtos
                </Link>
              </li>
              <li>
                <Link to="/categories" className="hover:underline hover:underline-offset-4 hover:font-medium hover:text-[#C92071] text-[#474747]">
                  Categorias
                </Link>
              </li>
              <li>
                <Link to="/my-orders" className="hover:underline hover:underline-offset-4 hover:font-medium hover:text-[#C92071] text-[#474747]">
                  Meus Pedidos
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      {/* <h1 className="text-[#C92071] font-inter text-4xl font-semibold">Digital Store</h1> */}

      {/* <input type="text" placeholder="Pesquisar produto..." className="border border-gray-300 rounded px-6 py-2 mr-7 ml-7 w-full max-w-[550px]"/> */}

    </header>

  )
}