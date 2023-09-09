import { useState } from "react";
import styles from "./Modal.module.scss"

const Modal = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="button"
        onClick={() => setOpen(true)}>
        Open window
      </div>
      {open && <div>Modal</div>}
    </>
  );
};

export default Modal;
