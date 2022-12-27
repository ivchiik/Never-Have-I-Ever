import "./App.css";
import TypesButton from "./Components/Buttons/TypesButton";
import "./fonts/bpg_extrasquare_mtavruli_2009.ttf";
import CustomModal from "./Components/Modals/Modal.js";
import { useState } from "react";
import { QuestionAdult, QuestionChild, QuestionCouples } from "./Data/Data";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [questions, setQuestions] = useState([]);

  const generateQuestions = (type) => {
    if (type === "friends") {
      setQuestions(QuestionChild);
    } else if (type === "adult") {
      setQuestions(QuestionAdult);
    } else if (type === "couples") {
      setQuestions(QuestionCouples);
    }
  };

  return (
    <div className="background">
      <img
        src={require("./Assets/background_image.jpg")}
        alt=""
        className="back-img"
      />
      <div className="wrapper">
        <img src={require("./Assets/logo.png")} alt="" className="logo" />
        <TypesButton
          title="გასართობი"
          color="orange"
          setIsOpen={setIsOpen}
          id="friends"
          generateQuestions={generateQuestions}
        />
        <TypesButton
          title="ცენზურა"
          color="purple"
          setIsOpen={setIsOpen}
          id="adult"
          generateQuestions={generateQuestions}
        />
        <TypesButton
          title="18+ წყვილებისთვის"
          color="red"
          setIsOpen={setIsOpen}
          id="couples"
          generateQuestions={generateQuestions}
        />
      </div>
      <CustomModal
        modalIsOpen={isOpen}
        questions={questions}
        afterOpenModal={() => {
          setIsOpen(true);
        }}
        closeModal={() => {
          setIsOpen(false);
        }}
        setIsOpen={setIsOpen}
      />
    </div>
  );
}

export default App;
