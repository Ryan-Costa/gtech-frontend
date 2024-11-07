const Radio = ({ label, opt, selectedOption, onChange }) => {
  return (
    <div className="flex items-center custom-checkbox mt-2.5">
      <input
        type="radio"
        className="absolute h-0 w-0 opacity-0"
        checked={selectedOption === opt}
        onChange={() => onChange(opt)}
      />
      <div onClick={() => onChange(opt)} className="border border-[#C92071] flex h-[22px] w-[22px] items-center justify-center rounded-full p-[3px]">
        {selectedOption === opt && (
          <div className="bg-[#C92071] size-full rounded-full" />
        )}
      </div>

      <label
        onClick={() => onChange(opt)}
        className="ml-2 text-[#474747]"
      >
        {label}
      </label>
    </div>


  );
}

export default Radio;