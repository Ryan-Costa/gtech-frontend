import { useState } from "react";
import Radio from "./radio";

const RadioGroup = () => {
  const [selectedOption, setSelectedOpition] = useState("");

  const handleOptionChange = (option) => {
    setSelectedOpition(option);
  };

  return (
    <>
      <p className="font-semibold text-[#474747] text-sm mt-5">Estado</p>
      <Radio label="Novo" opt="novo" selectedOption={selectedOption} onChange={handleOptionChange} />
      <Radio label="Usado" opt="usado" selectedOption={selectedOption} onChange={handleOptionChange} />
    </>
  );
};

export default RadioGroup;
