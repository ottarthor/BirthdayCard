import classNames from "../Util/classnames";

const MessageInput: React.FC<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  >
> = ({ className, ...props }) => {
  return (
    <textarea
      {...props}
      className={classNames(
        "rounded-lg resize-none placeholder:text-gray-600 outline-none focus:shadow-md p-2 bg-slate-100 shadow-lg",
        className
      )}
      placeholder="Write your birthday wishes here!"
      id="message"
    />
  );
};

export default MessageInput;
