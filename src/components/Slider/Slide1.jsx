import tenis from "../../assets/img/tenis.png";
import detalhe from "../../assets/img/detalhe.svg";


const Slide1 = () => {
  return (
    <div className="relative min-h-[681px] bg-[#F5F5F5] w-full flex flex-col gap-6 pl-[32rem] pb-52">
      <p className="font-bold mt-32 text-[#F6AA1C] text-base">Melhores ofertas personalizadas</p>
      <h1 className="font-extrabold text-[#1F1F1F] text-6xl">Queima de <br/> stoque Nike 🔥</h1>
      <p className="font-normal text-[#474747] text-lg">Consequat culpa exercitation mollit nisi excepteur do <br/> do tempor laboris eiusmod irure consectetur.</p>
      <button className="px-6 py-2 text-base text-white bg-[#C92071] hover:bg-opacity-50 transition-colors text-bold rounded-lg w-56">Ver ofertas</button>
      <img className="absolute right-20 2xl:right-40" src={tenis} alt="Tenis" />
      <img className="absolute right-20 top-20" src={detalhe} alt="Tenis" />

      <div className="flex gap-1 absolute bottom-20 right-[50%]">
        <p className="w-3 h-3 bg-[#C92071] rounded-full"></p>
        <p className="w-3 h-3 bg-[#CCC]  rounded-full"></p>
        <p className="w-3 h-3 bg-[#CCC]  rounded-full"></p>
      </div>
    </div>
  );
}
 
export default Slide1;