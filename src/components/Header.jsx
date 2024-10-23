import carrinho from "../assets/img/carrinho.svg";
import logo from "../assets/img/logo.svg";
import lupa from "../assets/img/lupa.svg";

export default function Header() {
  return (
    <header className="w-full h-48 bg-white flex justify-center">
      <div className="w-full flex flex-col max-w-screen-2xl">
        <div className="mr-28 ml-28 py-8 flex justify-between">
          <div className="flex items-center justify-between w-full">
            <img src={logo} alt="logo" className="h-10 mr-4" />

            <div className="flex items-center border border-gray-300 rounded max-w-[559px] w-full pr-4">
              <input type="text" placeholder="Pesquisar produto..." className="w-full pl-4 py-2" />
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

        <nav className="container">
          <div className="ml-24 px-4 py-2 flex">
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="hover:underline hover:underline-offset-4 hover:text-[#C92071] text-[#474747]">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:underline-offset-4 hover:text-[#C92071] text-[#474747]">
                  Produtos
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:underline-offset-4 hover:text-[#C92071] text-[#474747]">
                  Categorias
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:underline-offset-4 hover:text-[#C92071] text-[#474747]">
                  Meus Pedidos
                </a>
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