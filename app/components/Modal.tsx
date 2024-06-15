import React from "react";
import Bg from "../../public/assets/bgCubos.svg";

const Modal = () => {
  return (
    <div
      className="w-full flex items-center justify-center flex-col"
      style={{ backgroundImage: `url(${Bg})`, backgroundSize: 'cover' }}
    >
      <p>Ola</p>
    </div>
  );
};

export default Modal;
