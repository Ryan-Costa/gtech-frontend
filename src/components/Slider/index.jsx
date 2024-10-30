import { useState } from "react";
import Slide1 from "./Slide1";
import Slide2 from "./Slide2";
import Slide3 from "./Slide3";
// import Slide4 from "./Slide4";
import { NextIcon } from "../Icons/next-icon";
import { PrevIcon } from "../Icons/prev-icon";

const Slide = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    <Slide1 key={1} />,
    <Slide2 key={2} />,
    <Slide3 key={3} />,
    // <Slide4 key={4} />,
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    
    <div className="relative">
      <button onClick={handlePrev} className="p-4 absolute z-10 top-[80%] left-[1%] text-[#C92071] text-2xl"><PrevIcon /></button>
      {slides[currentIndex]}
      <button onClick={handleNext} className="p-4 text-[#C92071] absolute z-10 top-[80%] right-[5%]"><NextIcon /></button>
    </div>
  );
}
 
export default Slide;