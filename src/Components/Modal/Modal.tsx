import { useState } from "react";
import closeIcon from '/src/assets/svg/close.svg'
import "./Modal.scss";

interface ModalProps {
  title: string;
  children: React.ReactNode;
  closeModal: () => void;
}

const Modal = ({ title, children, closeModal }: ModalProps) => {
  return (
    <div className="modal">
      <section className="modal__main">
        <h3 className="modal__title"> {title}</h3>
        <button type="button" className="modal__button" onClick={closeModal}>
          <img className="modal__close" src={closeIcon} alt='Close Icon'/>
        </button>
        {children}
      </section>
    </div>
  );
};
export default Modal;
