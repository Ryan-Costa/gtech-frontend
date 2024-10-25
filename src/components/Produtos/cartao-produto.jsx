import tenis from "../../assets/img/tenis-produto.png";

const CartaoProduto = () => {
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="h-[321px] w-full bg-white relative flex items-center justify-center">
        <span className="bg-[#E7FF86] absolute left-5 top-5 py-1 px-3 rounded-full text-[#474747] font-bold text-sm">30% OFF</span>
        <img className="object-cover w-[248px] -rotate-[25deg]" src={tenis} alt="" />
      </div>
      <div className="flex flex-col">
        <span className="text-lg text-[#8F8F8F]">Tênis</span>
        <p className="text-2xl text-[#8F8F8F] font-normal">K-Swiss V8 - Masculino</p>
        <p className="text-2xl"><span className="font-normal line-through text-[#8F8F8F]">$200</span> <span className="font-bold text-black">$100</span></p>
      </div>
    </div>
  );
}
 
export default CartaoProduto;