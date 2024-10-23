import destaques2 from "../../assets/img/destaques2.svg";
import destaques3 from "../../assets/img/destaques3.svg";
import supreme from "../../assets/img/camisa-supreme.png";
import TShirtIcon from "../Icons/tshirt-icon";

export default function Destaques() {
  return (
    <div className="bg-[#F9F8FE] w-full flex flex-col items-center justify-center max-w-screen-2xl">
      {/* DESTAQUES 1 */}

      <div className="flex flex-col gap-4 mt-9 mb-5">
        <p className="text-start text-2xl text-[#474747] font-bold">Coleções em destaque</p>

        <div className="flex gap-3">
          <div className="relative w-[405px] bg-[#D8E3F2] h-[251px] rounded-lg py-9 px-8">
            <span className="bg-[#E7FF86] py-1 px-3 rounded-full text-[#474747] font-bold text-sm">30% OFF</span>

            <p className="text-[#1F1F1F] mt-[10px] mb-[20px] text-3xl font-bold">Novo drop<br /> Supreme</p>

            <button className="bg-white w-[153px] h-12 rounded-lg text-[#C92071] z-20 relative font-bold text-lg">Comprar</button>

            <img src={supreme} alt="Camisa" className="absolute right-0 bottom-0 z-10" />
          </div>

          <div className="items-center">
              {/* TODO CARD DE DESTQUE  */}
            <img src={destaques2} alt="destaques" />
          </div>
          <div className="items-center">
            {/*  TODO CARD DE DESTQUE */}
            <img src={destaques3} alt="destaques" />
          </div>
        </div>
      </div>

      {/* DESTAQUES 2 */}

      <div className="flex flex-col items-center my-[100px]">
        <p className="text-start text-2xl text-[#474747] font-bold">Coleções em destaque</p>

        <div className="flex gap-12 mt-5">
          <div style={{ boxShadow: "0px 4px 25px 0px rgba(0, 0, 0, 0.05)" }} className="w-24 h-24 bg-white rounded-full flex items-center text-[#C92071] justify-center opacity-50 hover:opacity-100"><TShirtIcon /></div>
          <div style={{ boxShadow: "0px 4px 25px 0px rgba(0, 0, 0, 0.05)" }} className="w-24 h-24 bg-white rounded-full"></div>
          <div style={{ boxShadow: "0px 4px 25px 0px rgba(0, 0, 0, 0.05)" }} className="w-24 h-24 bg-white rounded-full"></div>
          <div style={{ boxShadow: "0px 4px 25px 0px rgba(0, 0, 0, 0.05)" }} className="w-24 h-24 bg-white rounded-full"></div>
          <div style={{ boxShadow: "0px 4px 25px 0px rgba(0, 0, 0, 0.05)" }} className="w-24 h-24 bg-white rounded-full"></div>
        </div>
      </div>

    </div>
  )
}