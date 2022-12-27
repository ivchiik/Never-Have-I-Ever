import React from "react";
import { ReactComponent as FriendIcon } from "../../Assets/friend.svg";
import { ReactComponent as AdultIcon } from "../../Assets/adult.svg";
import { ReactComponent as CouplesIcon } from "../../Assets/couples.svg";

const TypesButton = (props) => {
  const { color, title, generateQuestions, setIsOpen, id } = props;

  const generateIcon = () => {
    if (id === "friends") {
      return <FriendIcon style={{ width: 60, paddingRight: 10 }} />;
    } else if (id === "adult") {
      return <AdultIcon style={{ width: 60, paddingRight: 10 }} />;
    } else if (id === "couples") {
      return <CouplesIcon style={{ width: 60, paddingRight: 10 }} />;
    }
  };
  return (
    <div
      className={`btn ${color}`}
      onClick={() => {
        setIsOpen(true);
        generateQuestions(id);
      }}
    >
      {generateIcon()}
      <h1 className="title">{title}</h1>
    </div>
  );
};

export default TypesButton;
