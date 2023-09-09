import { useState } from "react";
import styles from "./Modal.module.scss";

const Modal = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="button"
        onClick={() => setOpen(true)}>
        Open modal
      </div>
      {open && (
        <div
          className={styles.overlay}
          onClick={() => setOpen(false)}>
          <div
            className={styles.window}
            onClick={(e) => {
              e.stopPropagation();
            }}>
            <p>This is modal window. To close it press button or click around window.</p>
            <div
              className="button"
              onClick={() => {
                setOpen(false);
              }}>
              Close
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
