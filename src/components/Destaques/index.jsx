
import supreme from "../../assets/img/camisa-supreme.png";
import TShirtIcon from "../Icons/tshirt-icon";
import tenis from "../../assets/img/tenis-destaque.png";
import headset from "../../assets/img/headset.png";
import { JeansIcon } from "../Icons/jeans-icon";
import { HeadphoneIcon } from "../Icons/headphone-icon";
import { TenisIcon } from "../Icons/tenis-icon";
import { FirstCardDestaques } from "./first-card-destaques"
import { SecondCardDestaques } from "./second-card-destaques";


export default function Destaques() {
  return (
    <div className="bg-[#F9F8FE] w-full flex flex-col items-center justify-center max-w-screen-2xl">
      {/* DESTAQUES 1 */}

      {/* CARD 1 */}
      <div className="flex flex-col gap-4 mt-9 mb-5">
        <p className="text-start text-2xl text-[#474747] font-bold">Coleções em destaque</p>

        <div className="flex gap-3">
          {/* CARD 1 */}
          {/* <FirstCardDestaques title={`Novo drop<br /> Supreme`} image={supreme} /> */}

          <div className="relative w-[405px] bg-[#D8E3F2] h-[251px] rounded-lg py-9 px-8">
            <span className="bg-[#E7FF86] py-1 px-3 rounded-full text-[#474747] font-bold text-sm">30% OFF</span>
            <p className="text-[#1F1F1F] mt-[10px] mb-[20px] text-3xl font-bold">Novo drop<br /> Supreme</p>
            <button className="bg-white w-[153px] h-12 rounded-lg text-[#C92071] z-20 relative font-bold text-lg">Comprar</button>
            <img src={supreme} alt="Camisa" className="absolute right-0 bottom-0 z-10" />
          </div>

          {/* CARD 2 */}
          <div className="relative w-[405px] bg-[#D8E3F2] h-[251px] rounded-lg py-9 px-8">
            <span className="bg-[#E7FF86] py-1 px-3 rounded-full text-[#474747] font-bold text-sm" >30% OFF</span>
            <p className="text-[#1F1F1F] mt-[10px] mb-[20px] text-3xl font-bold">Coleção <br />Adidas </p>
            <button className="bg-white w-[153px] h-12 rounded-lg text-[#C92071] z-20 relative font-bold text-lg" >Comprar</button>
            <img src={tenis} alt="camisa" className="absolute right-0 bottom-0 z-10" />
          </div>

          {/*  CARD 3 */}
          <div className="relative w-[405px] bg-[#D8E3F2] h-[251px] rounded-lg py-9 px-8">
            <span className="bg-[#E7FF86] py-1 px-3 rounded-full text-[#474747] font-bold text-sm" >30% OFF</span>
            <p className="text-[#1F1F1F] mt-[10px] mb-[20px] text-3xl font-bold">Novo <br /> Beats Bass</p>
            <button className="bg-white w-[153px] h-12 rounded-lg text-[#C92071] z-20 relative font-bold text-lg" >Comprar</button>
            <img src={headset} alt="camisa" className="absolute right-0 bottom-0 z-10" />
          </div>
        </div>
      </div>

      {/* DESTAQUES 2 */}

      <div className="flex flex-col items-center my-[100px]">
        <p className="text-start text-2xl text-[#474747] font-bold">Coleções em destaque</p>

        <div className="flex gap-12 mt-5">
          <SecondCardDestaques label="Camisetas"><TShirtIcon /></SecondCardDestaques>
          <SecondCardDestaques label="Calças"><JeansIcon /></SecondCardDestaques>
          <SecondCardDestaques label="Bonés"><JeansIcon /></SecondCardDestaques>
          <SecondCardDestaques label="Headphones"><HeadphoneIcon /></SecondCardDestaques>
          <SecondCardDestaques label="Tenis"><TenisIcon /></SecondCardDestaques>


        </div>


      </div>

    </div>
  )
}