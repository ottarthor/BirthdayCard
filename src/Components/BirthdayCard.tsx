import { useRef } from "react";
import html2canvas from "html2canvas";

const BirthdayCard: React.FC<{ from: string; to: string; message: string }> = ({
  from,
  to,
  message,
  ...props
}) => {
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
        className="bg-gradient-to-r from-blue-400 to-blue-700 min-w-[300px] max-w-[600px] min-h-[300px] max-h-[450] rounded-lg flex p-4 shadow-lg"
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
            className="lg:w-[300px] lg:h-[300px] md:w-[200px] md:h-[200px] sm:w-[100px] sm:h-[100px]"
            src="happyPeople.png"
            alt="celebrating people"
          />
        </div>
      </div>

      <button
        className="bg-pink-100 rounded-lg mt-10 p-2 "
        onClick={takeScreenshot}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
          />
        </svg>
      </button>
    </div>
  );
};

export default BirthdayCard;
