import React from "react";
import Modal from "react-modal";
import "./modals.css";
const SlotConfirmationModal = ({ slot, onClose, onConfirm }) => {
  const handleClose = () => {
    onClose();
  };
  Modal.setAppElement("#root");
  const handleConfirm = () => {
    onConfirm();
    onClose();
  };

  const formatDate = (date) => {
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const dayOfWeek = daysOfWeek[date.getDay()];
    const dayOfMonth = date.getDate();
    const month = months[date.getMonth()];
    const hour = date.getHours();

    return `${dayOfWeek} ${dayOfMonth}, ${month} at ${hour}:00`;
  };
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "rgba(0, 0, 0, 0.4)",
      borderRadius: "300px 200px 350px 200px",
      border: "solid 0px",
      padding: "20px",
    },
    overlay: {
      background: "rgba(255, 255, 255, 0)",
    },
  };

  return (
    <Modal isOpen={true} style={customStyles} onRequestClose={onClose}>
      <div className="modal-content">
        <h2>It looks like you'd be the perfect curator!</h2>
        <p>Do you want to book the following slot to share your hidden gems?</p>
        <p className="date-selection">{formatDate(new Date(slot))}</p>
        <div className="input-buttons">
          <button onClick={handleClose}>Not yet</button>
          <button onClick={handleConfirm}>Hell yes!</button>
        </div>
      </div>
    </Modal>
  );
};
export default SlotConfirmationModal;
