import { ChangeEvent, useCallback, useMemo, useState } from "react";
import BirthdayCard from "./Components/BirthdayCard";
import MessageInput from "./Components/MessageInput";
import NameInput from "./Components/NameInput";
import WelcomeComponent from "./Components/WelcomeComponent";
import ArrowButton from "./Components/ArrowButton";

type Stage = "welcome" | "name" | "message" | "card";

interface BirthdayCardInfo {
  recipient: string;
  sender: string;
  message: string;
}

const Container: React.FC = () => {
  const [stage, setStage] = useState<Stage>("welcome");
  const [errorMessage, setErrorMessage] = useState<string>();
  const [info, setInfo] = useState<BirthdayCardInfo>({
    recipient: "",
    sender: "",
    message: "",
  });

  const changeRecipient = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setInfo({
        ...info,
        recipient: event.target.value,
      });
    },
    [info]
  );

  const changeSender = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setInfo({
        ...info,
        sender: event.target.value,
      });
    },
    [info]
  );

  const changeMessage = useCallback(
    (event: ChangeEvent<HTMLTextAreaElement>) => {
      setInfo({
        ...info,
        message: event.target.value,
      });
    },
    [info]
  );

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      nextStage();
    }
  };

  const nextStage = useCallback(() => {
    switch (stage) {
      case "welcome":
        setStage("name");
        break;
      case "name":
        if (info.recipient.length && info.sender.length) {
          setStage("message");
          setErrorMessage("");
        } else {
          setErrorMessage("please fill in the names before continuing!");
        }
        break;
      case "message":
        if (info.message.trim() !== "") {
          setStage("card");
          setErrorMessage("");
        } else {
          setErrorMessage("please fill in the message before continuing!");
        }
        break;
      case "card":
        break;
    }
  }, [info.message, info.recipient.length, info.sender.length, stage]);

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      nextStage();
    },
    [nextStage]
  );

  const errorView = useMemo(() => {
    return (
      <div className="max-w-[400px] absolute">
        {!!errorMessage && errorMessage.length && (
          <p className="text-gray-500 text-sm">{errorMessage}</p>
        )}
      </div>
    );
  }, [errorMessage]);

  const stageView = useMemo(() => {
    switch (stage) {
      case "welcome":
        return (
          <div className="flex flex-col items-center">
            <WelcomeComponent />
            <ArrowButton onClick={handleClick} />
          </div>
        );
      case "name":
        return (
          <div className="min-w-[300px]">
            <div className="grid grid-cols-[40px,1fr] items-center gap-4 pb-4">
              <p>From</p>
              <NameInput
                onChange={changeSender}
                placeholder="Name"
                id="sender"
              />
              <p>To</p>
              <NameInput
                onChange={changeRecipient}
                placeholder="Name"
                id="recipient"
              />
            </div>
            <div className="flex flex-col items-center space-y-6">
              {errorView}
              <ArrowButton onClick={handleClick} />
            </div>
          </div>
        );
      case "message":
        return (
          <div>
            <p className="pb-2 pl-1">Message</p>
            <MessageInput
              onChange={changeMessage}
              placeholder="Write your birthday wishes here!"
              className="lg:w-[400px] min-w-[300px] min-h-[150px]"
              id="message"
            />
            <div className="flex flex-col items-center space-y-6">
              {errorView}
              <ArrowButton onClick={handleClick} />
            </div>
          </div>
        );

      case "card":
        return (
          <div className="flex flex-col items-center">
            <BirthdayCard
              from={info.sender}
              to={info.recipient}
              message={info.message}
            />
            <button
              className="bg-pink-100 w-40 rounded-lg mt-4 p-2 "
              onClick={() => {
                setStage("welcome");
                setInfo({ recipient: "", sender: "", message: "" });
              }}
            >
              Make a new card!
            </button>
          </div>
        );
    }
  }, [
    changeMessage,
    changeRecipient,
    changeSender,
    errorView,
    handleClick,
    info.message,
    info.recipient,
    info.sender,
    stage,
  ]);

  return (
    <div
      onKeyDown={handleKeyDown}
      className="bg-emerald-400 min-h-screen flex-1 flex justify-center items-center p-4"
      tabIndex={0}
      autoFocus
    >
      {stageView}
    </div>
  );
};

export default Container;
