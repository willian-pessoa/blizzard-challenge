import React from "react";
import ReactDOM from "react-dom";

import Input from "../FormElements/Input/Input";
import Button from "../FormElements/Button/Button";

import {
  RiCloseFill,
  RiGoogleFill,
  RiAppleFill,
  RiFacebookBoxFill,
} from "react-icons/ri";

import "./Modal.scss";

const Modal = (props) => {
  const { setShow } = props;

  const content = (
    <div className="modal center">
      <div className="modal__content">
        <RiCloseFill
          onClick={() => setShow(false)}
          color="white"
          size={30}
          className="modal__close"
        />
        <img src="assets/logo-battle-net.png" alt="logo-battle-net" />
        <div className="modal__form">
          <Input placeholder="E-mail ou Telefone" />
          <Input placeholder="Senha" type="password" />
          <Button>Conectar-se</Button>
        </div>
        <div className="modal__social-login">
          <p>ou conecte-se com</p>
          <div className="modal__social-login-icons">
            <RiGoogleFill className="box-icon" size={30} color="black" />
            <RiAppleFill className="box-icon" size={30} color="black" />
            <RiFacebookBoxFill className="box-icon" size={30} color="black" />
          </div>
        </div>
        <div className="modal__footer">
          <p>
            <u> Crie uma conta</u> Battle.net de graça
          </p>
          <u>Não consegue logar? </u>
        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(content, document.getElementById("modal-hook"));
};

export default Modal;
