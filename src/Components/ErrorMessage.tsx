const ErrorMessage: React.FC<{ message: string }> = ({ message }) => {
  return <p className="text-gray-500">{message}</p>;
};

export default ErrorMessage;
