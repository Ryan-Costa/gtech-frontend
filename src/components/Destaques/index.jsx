
import supreme from "../../assets/img/camisa-supreme.png";
import TShirtIcon from "../Icons/tshirt-icon";
import tenis from "../../assets/img/tenis-destaque.png";
import headset from "../../assets/img/headset.png";
import { JeansIcon } from "../Icons/jeans-icon";
import { HeadphoneIcon } from "../Icons/headphone-icon";
import { TenisIcon } from "../Icons/tenis-icon";
import { Categorias } from "./categorias";
import CartaoDestaques from "./cartao-destaques";


export default function Destaques() {
  return (
    <div className="bg-[#F9F8FE] w-full flex flex-col max-w-screen-2xl items-center justify-center">
      {/* DESTAQUES 1 */}

      {/* CARD 1 */}
      <div className="flex flex-col gap-4 mt-9 mb-5 w-full">
        <p className="text-start text-2xl text-[#474747] font-bold">Coleções em destaque</p>

        <div className="flex gap-3 w-full">
          {/* CARD 1 */}
          <CartaoDestaques image={supreme}>Novo drop<br /> Supreme</CartaoDestaques>
          <CartaoDestaques image={tenis}>Coleção <br />Adidas </CartaoDestaques>
          <CartaoDestaques image={headset}>Novo <br /> Beats Bass</CartaoDestaques>
        </div>
      </div>

      {/* DESTAQUES 2 */}

      <div className="flex flex-col items-center my-[100px]">
        <p className="text-start text-2xl text-[#474747] font-bold">Coleções em destaque</p>

        <div className="flex gap-12 mt-5">
          <Categorias label="Camisetas"><TShirtIcon /></Categorias>
          <Categorias label="Calças"><JeansIcon /></Categorias>
          <Categorias label="Bonés"><JeansIcon /></Categorias>
          <Categorias label="Headphones"><HeadphoneIcon /></Categorias>
          <Categorias label="Tenis"><TenisIcon /></Categorias>
        </div>
      </div>
    </div>
  )
}