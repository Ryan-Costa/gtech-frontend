import logo from "../assets/img/logo-branca.svg";
import redes from "../assets/img/redes-sociais.svg";


export default function Footer() {
  return (
    <footer className="w-full h-[454px] bg-[#1F1F1F] flex flex-wrap justify-center">
      <div className="container flex justify-between my-[72px] mx-[100px]">

        <div>

          <img src={logo} alt="logo-branca" className="mb-10" />
            <p className="mb-10 text-[#fff]">Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore.</p>
          <img src={redes} alt="icone-redes-sociais" className="mb-10 hover:text-[#ffffff] text-[#cac9c9] cursor-pointer" />

        </div>

        <div className="flex flex-col text-[#fff]">

          <h3 className="text-xl font-bold mb-2">Informações</h3>
          <ul>
            <li className="hover:text-[#ffffff] text-[#cac9c9] cursor-pointer">Sobre Drip Store</li>
            <li className="hover:text-[#ffffff] text-[#cac9c9] cursor-pointer">Segurança</li>
            <li className="hover:text-[#ffffff] text-[#cac9c9] cursor-pointer">Wishlist</li>
            <li className="hover:text-[#ffffff] text-[#cac9c9] cursor-pointer">Blog</li>
            <li className="hover:text-[#ffffff] text-[#cac9c9] cursor-pointer">Trabalhe conosco</li>
            <li className="hover:text-[#ffffff] text-[#cac9c9] cursor-pointer">Meus Pedidos</li>
          </ul>

        </div>

        <div className="flex flex-col text-[#fff]">

          <h3 className="text-xl font-bold mb-2">Categorias</h3>
          <ul>
            <li className="hover:text-[#ffffff] text-[#cac9c9] cursor-pointer">Camisetas</li>
            <li className="hover:text-[#ffffff] text-[#cac9c9] cursor-pointer">Calças</li>
            <li className="hover:text-[#ffffff] text-[#cac9c9] cursor-pointer">Bonés</li>
            <li className="hover:text-[#ffffff] text-[#cac9c9] cursor-pointer">Headphones</li>
            <li className="hover:text-[#ffffff] text-[#cac9c9] cursor-pointer">Tênis</li>
          </ul>

        </div>

        <div className="flex flex-col text-[#fff]">

          <h3 className="text-xl font-bold mb-2">Contato</h3>
          <p className="mb-[14px]">Av. Santos Dumont, 1510 - 1 <br />andar - Aldeota, Fortaleza - <br />CE, 60150-161</p>
          <p>(85) 3051-3411</p>

        </div>

      </div>

      <hr className="w-[1500px] opacity-30" />
      <div className="w-full justify-center bg-[#1F1F1F]">

        <p className="text-sm text-center text-[#fff] opacity-30 py-6">© 2023 Digital College</p>

      </div>

    </footer>

  )
}