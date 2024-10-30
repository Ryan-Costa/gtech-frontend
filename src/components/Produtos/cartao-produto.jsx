const CartaoProduto = ({ nome, categoria, desconto, preco, imagem }) => {

  const precoOriginal = preco.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2, style: "currency", currency: "BRL" });
  const precoComDesconto = preco * (1 - desconto);
  const precoFormatado = precoComDesconto.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2, style: "currency", currency: "BRL" });

  return (
    <div className="w-full flex flex-col gap-4 rounded">
      <div className="h-[321px] w-full bg-white relative flex items-center justify-center">
        <span className="bg-[#E7FF86] absolute left-5 top-5 py-1 px-3 rounded-full text-[#474747] font-bold text-sm">{desconto * 100}% OFF</span>
        <img className="object-cover w-[260px]" src={imagem} alt="" />
      </div>
      <div className="flex flex-col">
        <span className="text-lg text-[#8F8F8F]">{categoria}</span>
        <p className="text-2xl text-[#8F8F8F] font-normal">{nome}</p>
        <p className="text-2xl space-x-1.5">
          <span className="font-normal line-through text-[#8F8F8F]">{precoOriginal}</span>
          <span className="font-bold text-black">{precoFormatado}</span>
        </p>
      </div>
    </div>
  );
}
 
export default CartaoProduto;