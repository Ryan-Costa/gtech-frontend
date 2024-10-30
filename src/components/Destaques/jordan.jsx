import jordan from "../../assets/img/jordan.png";

export default function Jordan() {
    return (
        <div className="relative min-h-[533px] flex justify-center items-center bg-[#ffffff] w-full">
            <div className="absolute h-[466px] w-[466px] bg-gradient-to-b from-purple-500/25 to-white to to-45% rounded-full right-[52%] mt-10"></div>

            <img className="relative z-index w-[573px] h-[330px] mr-16" src={jordan} alt="jordan" />
            

            <div className="text-left">
                <p className="text-[#C92071] font-bold text-sm mt-6">Oferta especial</p>

                <h2 className="text-[48px] mt-2 mb-5 text-[#474747] font-bold h-[100px] w-[514px] leading-none">Air Jordan edição de colecionador</h2>

                <p className="text-[#474747] mt-5 w-[589px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>

                <button className="px-6 py-2 mt-9 text-base text-white bg-[#C92071] hover:bg-opacity-50 transition-colors text-bold rounded-lg w-56">Ver Oferta</button>
            </div>
        </div>


    )
}