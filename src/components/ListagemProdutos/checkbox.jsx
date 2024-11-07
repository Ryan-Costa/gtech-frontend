import { useState } from "react";

const Checkbox = ({ label }) => {
  const [selectedOption, setSelectedOption] = useState(false);

  const toggleCheckbox = () => {
    console.log(selectedOption);
    setSelectedOption(!selectedOption);
  };

  return (
    <div className="flex items-center custom-checkbox mt-2.5">
      <input
        type="checkbox"
        className="absolute h-0 w-0 opacity-0"
        checked={selectedOption}
        onChange={toggleCheckbox}
      />
      <label
        onClick={toggleCheckbox}
        className="flex gap-2 text-[#474747]"
      >
      <div
        className={`flex h-[22px] cursor-pointer w-[22px] items-center overflow-hidden justify-center rounded ${selectedOption ? "bg-primary" : "border border-[#C92071]"}`}
      >
        {selectedOption && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-full roundeed bg-[#C92071] text-white"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </div>

      {label}
      </label>
    </div>
  );
};

export default Checkbox;
