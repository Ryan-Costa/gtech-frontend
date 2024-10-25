const CartaoDestaques = ({children, image}) => {
  return (
    <div className="relative w-full bg-[#D8E3F2] aspect-video rounded-lg py-9 px-8">
      <span className="bg-[#E7FF86] py-1 px-3 rounded-full text-[#474747] font-bold text-sm">30% OFF</span>
      <p className="text-[#1F1F1F] mt-[10px] mb-[20px] text-3xl font-bold">{children}</p>
      <button className="bg-white w-[153px] h-12 rounded-lg text-[#C92071] z-20 relative font-bold text-lg">Comprar</button>
      <img src={image} alt="Camisa" className="absolute right-0 bottom-0 z-10" />
    </div>
  );
}
 
export default CartaoDestaques;