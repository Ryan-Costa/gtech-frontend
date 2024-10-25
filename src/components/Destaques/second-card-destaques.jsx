
export const SecondCardDestaques = ({ children, label }) => {
  return (
    <div className="flex gap-3 flex-col cursor-pointer">
      <div style={{ boxShadow: "0px 4px 25px 0px rgba(0, 0, 0, 0.05)" }} className="w-24 h-24 bg-white rounded-full flex items-center text-[#C92071] justify-center opacity-50 hover:opacity-100">
        {children}
      </div>

      <p className="w-24 h-22 flex items-center justify-center text-[#474747] font-semibold">{label}</p>
    </div>
  )
}