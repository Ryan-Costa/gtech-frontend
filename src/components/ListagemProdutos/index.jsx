import { produtos } from "../../constantes/produtos";
import CartaoProduto from "../Produtos/cartao-produto";
import Checkbox from "./checkbox";

const ListagemProdutos = () => {
  

  
  return (
    <div className="w-full bg-[#F9F8FE] flex items-center flex-col mt-14">
      <div className="w-full max-w-screen-2xl">
        <div className="flex justify-between items-center">
          <p className="text-lg font-semibold text-[#474747]">Resultados para “Tênis” - {produtos.length} produtos</p>
          <div className="flex gap-1 border border-[#474747] p-4 rounded">
            <p className="text-lg font-semibold text-[#474747]">Ordenar por:</p>
            <select name="" id="" className="bg-transparent">
              <option value="relevancia">mais relevantes</option>
              <option value="recente">mais recentes</option>
              <option value="menor">menor preço</option>
              <option value="maior">maior preço</option>
            </select>
          </div>
        </div>

        <div className="flex gap-5 mt-14">
          <div className="w-full max-w-[308px] p-7 h-full max-h-[720px] bg-white rounded">
            <p className="font-semibold text-lg text-[#474747]">Filtrar por:</p>
            
            <div className="w-full h-[1px] my-5 bg-[#ccc]"></div>

            <p className="font-semibold text-[#474747] text-sm">Marca</p>
            
            <div className="space-y-2.5">
              <Checkbox label="Adidas" />
              <Checkbox label="Calebcuaga" />
              <Checkbox label="Adidas" />
              <Checkbox label="Adidas" />
            </div>
          </div>
          <div className="w-full grid grid-cols-3 gap-3.5">
            {produtos.map((produto, i) => (
              <CartaoProduto key={i} nome={produto.nome} categoria={produto.categoria} desconto={produto.desconto} preco={produto.preco} imagem={produto.imagem}/>
            ))}
          </div>  
        </div>
      </div>
    </div>
  );
}
 
export default ListagemProdutos;