import Destaques from "../components/Destaques";
import Jordan from "../components/Destaques/jordan";
import GradeProdutos from "../components/Produtos";
import Slide from "../components/Slider";

function Home() {
  return (
    <>
      <Slide />
      <div className="w-full flex flex-col items-center">
        <Destaques />
        <GradeProdutos title="Produtos em Alta" />
        <Jordan />
      </div>
    </>
  );
}

export default Home;
