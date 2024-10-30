import { Link } from "react-router-dom";
import { ArrowRight } from "../Icons/arrow-right";
import CartaoProduto from "./cartao-produto";
import { produtos } from "../../constantes/produtos";

const ProdutosEmAlta = () => {
  return (
    <div className="flex flex-col gap-5 bg-[#F9F8FE] w-full max-w-screen-2xl mx-28">
        <div className="w-full max-w-screen-2xl">
          <div className="flex items-center justify-between w-full">
            <h3 className="text-start text-2xl text-[#474747] font-bold">Produtos em Alta</h3>
            <Link to="/product-list" className="text-[#C92071] flex gap-1 items-center text-lg">Ver todos <ArrowRight /></Link>
          </div>
          <div className="mt-5 mb-32 grid grid-cols-4 gap-x-3.5 gap-y-5 rounded-[4px]">
            {produtos.map((produto, index) => (
              <CartaoProduto key={index} nome={produto.nome} categoria={produto.categoria} desconto={produto.desconto} preco={produto.preco} imagem={produto.imagem}  />
            ))}
          </div>
        </div>
    </div>
  );
}
 
export default ProdutosEmAlta;