import classNames from "../Util/classnames";

interface ArrowButtonProps {
  onClick: (event: React.MouseEvent<SVGSVGElement>) => void;
  className?: string | undefined;
}

const ArrowButton: React.FC<ArrowButtonProps> = ({ onClick, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2.0}
      stroke="currentColor"
      className={classNames("w-6 h-6 mt-4 hover:cursor-pointer", className)}
      onClick={onClick}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.25 4.5l7.5 7.5-7.5 7.5"
      />
    </svg>
  );
};

export default ArrowButton;
