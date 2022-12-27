import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import ReactDOM from "react-dom";
import { ReactComponent as CloseIcon } from "../../Assets/close.svg";

const CustomModal = (props) => {
  const { modalIsOpen, afterOpenModal, closeModal, questions, setIsOpen } = props;
  const [result, setResult] = useState("");
  useEffect(() => {
    handleClick();
  });
  const handleClick = () => {
    setResult(questions[Math.floor(Math.random() * questions.length)]);
  };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
              className="modal"
          >
              <CloseIcon style={{ width: 30, position: 'absolute', bottom: '15%', right: 10 }}
                  onClick={() => {
                      setIsOpen(false);
                  }} />
        <p className="modal-text">{result}</p>
        <div className="next" onClick={handleClick}>
          შემდეგი
        </div>
      </Modal>
    </div>
  );
};

export default CustomModal;
