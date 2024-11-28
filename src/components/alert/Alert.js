import React, { useState } from "react";
import "./Alert.css";

const Alert = ({ onClose }) => {
  const [visible, setVisible] = useState(true);

  const handleClose = () => {
    setVisible(false);
    onClose(); // Notify App that the Alert is closed
  };

  return (
    visible && (
      <div className="alert">
        <span>
          Complimentary Bookkeeping Health Check This December!!
        </span>
        <button className="alert-close" onClick={handleClose}>
          ✖
        </button>
      </div>
    )
  );
};

export default Alert;
