import React from "react";
import ReactDOM from "react-dom";

import "./Modal.scss";

const Modal = (props) => {
  const { setShow } = props;

  const content = (
    <div className="modal center">
      <div className="modal__content"></div>
    </div>
  );

  return ReactDOM.createPortal(content, document.getElementById("modal-hook"));
};

export default Modal;
