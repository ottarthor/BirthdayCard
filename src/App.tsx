import { ChangeEvent, useState } from "react";
import BirthdayCard from "./Components/BirthdayCard";
import NameInput from "./Components/NameInput";
import MessageInput from "./Components/MessageInput";
import WelcomeComponent from "./Components/WelcomeComponent";

function App() {
  const [state, setState] = useState("welcome");
  const [error, setError] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [message, setMessage] = useState("");

  const changeFrom = (event: ChangeEvent<HTMLInputElement>) => {
    setFrom(event.target.value);
  };

  const changeTo = (event: ChangeEvent<HTMLInputElement>) => {
    setTo(event.target.value);
  };

  const changeMessage = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      switchState(state);
    }
  };

  function switchState(state: string) {
    switch (state) {
      case "welcome":
        setState("name");
        break;
      case "name":
        if (from.length && to.length) {
          setState("message");
          setError("");
        } else {
          setError("please fill in the names before continuing!");
        }
        break;
      case "message":
        if (message.trim() !== "") {
          setState("card");
          setError("");
        } else {
          setError("please fill in the message before continuing!");
        }
        break;
      case "card":
        break;
    }
  }

  return (
    <div
      onKeyDown={handleKeyDown}
      className="bg-emerald-400 min-h-screen flex-1 flex justify-center items-center p-4"
      tabIndex={0}
    >
      {state === "welcome" && <WelcomeComponent />}
      {state === "name" && (
        <div className="min-w-[300px]">
          <div className="grid grid-cols-[40px,1fr] items-center gap-4 pb-4">
            <p>From</p>
            <NameInput onChange={changeFrom} />
            <p>To</p>
            <NameInput onChange={changeTo} />
          </div>

          <div className="w-[300px] absolute">
            {!!error.length && <p className="text-gray-500 text-sm">{error}</p>}
          </div>
        </div>
      )}

      {state === "message" && (
        <div>
          <p className="pb-2 pl-1">Message</p>
          <MessageInput
            onChange={changeMessage}
            className="min-w-[400px] min-h-[150px]"
          />
          <div className="max-w-[400px] absolute">
            {!!error.length && <p className="text-sm text-gray-500">{error}</p>}
          </div>
        </div>
      )}
      {state === "card" && (
        <BirthdayCard from={from} to={to} message={message} />
      )}
    </div>
  );
}

export default App;
