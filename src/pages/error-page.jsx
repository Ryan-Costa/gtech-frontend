import Footer from "../components/Footer";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.svg";

const ErrorPage = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center h-fit py-12 bg-gray-100 text-gray-800">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-6">
          Oops! Página não encontrada
        </h2>
        <p className="text-lg mb-8 text-center max-w-md">
          Parece que a página que você está procurando não existe.
        </p>
        <img
          src={logo}
          alt="Página não encontrada"
          className="w-50 h-20 object-cover mb-8 "
        />
        <Link to="/" className="px-6 py-3 underline text-[#C92071]">
          Voltar para a Página Inicial
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default ErrorPage;
