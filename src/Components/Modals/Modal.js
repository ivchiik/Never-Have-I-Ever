import React from "react";
import Modal from "react-modal";
import ReactDOM from "react-dom";

const customStyles = {
  content: {

  },
};

const CustomModal = (props) => {
  const { modalIsOpen, afterOpenModal, closeModal } = props;
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
              contentLabel="Example Modal"
              className='modal'
      >
              <p className="modal-text">რამე</p>
              <div className="next">შემდეგი</div>
      </Modal>
    </div>
  );
};

export default CustomModal;
