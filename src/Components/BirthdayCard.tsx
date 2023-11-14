import { useState, useRef } from "react";
import html2canvas from "html2canvas";

const BirthdayCard: React.FC<{ from: string; to: string; message: string }> = ({
  from,
  to,
  message,
  ...props
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e: any) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
    console.log(mousePosition);
  };

  const componentRef = useRef<HTMLDivElement>(null);

  const takeScreenshot = () => {
    if (componentRef.current) {
      html2canvas(componentRef.current).then((canvas) => {
        const image = canvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.href = image;
        link.download = "birthdayCard.png";
        link.click();
      });
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div
        {...props}
        className="bg-gradient-to-r from-blue-400 to-blue-700 w-[600px] h-96 rounded-lg flex p-4 shadow-lg"
        onMouseMove={handleMouseMove}
        ref={componentRef}
      >
        <div className="flex flex-col justify-between flex-1 p-2">
          <div>
            <h1 className="text-4xl mb-4 font-black italic text-pink-200">
              Happy birthday!
            </h1>
            <p className="mb-4 text-lg text-pink-100">{message}</p>
          </div>
          <div>
            <p className="text-lg text-pink-100">
              <span className="font-black italic">From:</span> {from}
            </p>
            <p className="text-lg text-pink-100">
              <span className="font-black italic">To:</span> {to}
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <img
            className="w-[300px] h-[300px]"
            src="happyPeople.png"
            alt="celebrating people"
          />
        </div>
      </div>

      <button
        className="bg-pink-100 w-40 rounded-lg mt-10 p-2 "
        onClick={takeScreenshot}
      >
        Save my card!
      </button>
    </div>
  );
};

export default BirthdayCard;
