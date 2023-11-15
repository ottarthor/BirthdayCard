import classNames from "../Util/classnames";

const NameInput: React.FC<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
> = ({ className, ...props }) => {
  return (
    <input
      {...props}
      maxLength={30}
      className={classNames(
        "rounded-lg resize-none placeholder:text-gray-600 outline-none focus:shadow-md p-2 bg-slate-100 shadow-lg",
        className
      )}
    />
  );
};

export default NameInput;
