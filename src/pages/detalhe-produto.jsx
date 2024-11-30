import { Link, useParams } from "react-router-dom";
import { produtos } from "../constantes/produtos";
import { Star } from "../components/Icons/star";
import { useState } from "react";
import GradeProdutos from "../components/Produtos";

const DetalheProduto = () => {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState(null);
  const produto = produtos.find((produto) => produto.id === Number(id));

  if (!produto) {
    return <p>Produto não encontrado</p>;
  }

  console.log("ceil: ", Math.ceil(5 - produto.avaliacao));
  console.log("floor: ", Math.floor(produto.avaliacao));

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div className="my-10 flex w-full items-start text-[#474747] font-medium text-sm justify-start max-w-screen-2xl gap-1">
        <Link to="/" className="hover:font-bold w-[40px]">
          Home
        </Link>
        /
        <Link to="/product-list" className="hover:font-bold w-[61px]">
          Produtos
        </Link>
        /<Link className="hover:font-bold w-[37px]">Tenis</Link>/
        <Link className="hover:font-bold w-[37px]">Tenis</Link>
      </div>

      <div className="mb-10 flex w-full items-start justify-start max-w-screen-2xl gap-10">
        <div>
          <div className="w-[700px] h-[571px] flex items-center justify-center bg-blue-100 rounded-[4px]">
            <img
              className="object-cover w-[500px] h-[284px] "
              src={produto.imagem}
              alt={produto.name}
            />
          </div>
        </div>

        <div>
          <h1 className="text-[#1F1F1F] text-[32px] font-bold">
            {produto.nome}
          </h1>
          <p className="mt-2.5 text-[#666] text-xs font-medium">
            {produto.subcategoria}
          </p>

          <div className="mt-3.5 flex gap-2.5 items-center">
            <div className="flex">
              {Array.from({ length: Math.floor(produto.avaliacao) }).map(() => (
                <Star key={crypto.randomUUID()} />
              ))}
              {Array.from({
                length: Math.ceil(5 - produto.avaliacao),
              }).map(() => (
                <Star fill="transparent" key={crypto.randomUUID()} />
              ))}
            </div>
            <div className="flex items-center px-2.5 py-1.5 gap-1 bg-[#F6AA1C] w-[63px] h-[23px] text-white rounded-[4px] text-sm font-extrabold">
              {produto.avaliacao} <Star size={12} fill="white" stroke="white" />{" "}
            </div>
            <span className="text-[#8F8F8F]">
              ({produto.avaliacoes} avaliações)
            </span>
          </div>

          <div className="mt-6">
            <p className="font-normal text-base text-[#474747]">
              R${" "}
              <span className="mx-1 font-bold text-[32px]">
                {(produto.preco * produto.desconto).toLocaleString("pt-BR", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
              <span className=" text-base text-[#ccc] line-through">
                {produto.preco.toLocaleString("pt-BR", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
            </p>
          </div>

          <div className="mt-10">
            <h3 className="mb-1 text-[#8F8F8F] text-sm font-bold">
              Descrição do Produto
            </h3>
            <p className="text-[#474747] w-[400px] text-sm font-medium">
              {produto.descricao}
            </p>
          </div>

          <div className="mt-8">
            <h3 className="mb-1 text-[#8F8F8F] text-sm font-bold">Tamanho</h3>

            <div>
              {produto.tamanhos.map((tamanho, i) => (
                <button
                  key={i}
                  onClick={() => handleSizeClick(tamanho)}
                  className={`text-[#474747] text-bold w-12 h-12 hover:text-white hover:bg-[#C92071] px-3 py-3 border rounded-[4px] mr-2.5 border-[#CCC] ${
                    selectedSize === tamanho ? "bg-[#C92071] text-white" : ""
                  }`}
                >
                  {tamanho}
                </button>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="mb-1 text-[#8F8F8F] text-sm font-bold">Cores</h3>

              {produto.cores.map((cor, i) => (
                <button
                  className="w-9 h-9 rounded-full mr-2.5 hover:ring hover:ring-offset-2 hover:ring-[#C92071]"
                  style={{ backgroundColor: cor }}
                  key={i}
                  onClick={() => handleSizeClick(cor)}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <GradeProdutos title="Produtos Relacionados" />
    </div>
  );
};

export default DetalheProduto;
