import destaques1 from "../assets/img/destaques1.svg";
import destaques2 from "../assets/img/destaques2.svg";
import destaques3 from "../assets/img/destaques3.svg";
import colecoes from "../assets/img/colecoes.svg";

export default function Destaques() {
  return (
    <div className="w-full flex justify-center">
      <div>
        <div className="items-center p-6">
          <p className="text-start text-2xl">Coleções em destaque</p>
          <img src={destaques1} alt="destaques" />
        </div>
        <div className="items-center p-6">
          <img src={destaques2} alt="destaques" />
        </div>
        <div className="items-center p-6">
          <img src={destaques3} alt="destaques" />
        </div>
      </div>

      <div>
        <p className="text-start text-2xl">Coleções em destaque</p>
        <img src={colecoes} alt="itens" />
      </div>

    </div>




  )
}