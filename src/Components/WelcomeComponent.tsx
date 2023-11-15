const WelcomeComponent: React.FC<{}> = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-white text-6xl font-black italic pb-4">
        Start making your birthday card!
      </h1>
      <div className="flex flex-col items-center">
        <p className="text-gray-500 text-lg">Press enter to start</p>
      </div>
    </div>
  );
};

export default WelcomeComponent;
