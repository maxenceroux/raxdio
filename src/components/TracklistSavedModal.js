import React from "react";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import "./modals.css";
import { ReactComponent as Cancel } from "../assets/cancel.svg";
const TracklistSavedModal = ({ onClose }) => {
  const navigate = useNavigate();
  const handleClose = () => {
    onClose();
  };
  Modal.setAppElement("#root");
  const handleConfirm = () => {
    navigate(`/schedule`);
  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      borderRadius: "300px 200px 350px 200px",
      border: "solid 0px",
      padding: "20px",
    },
    overlay: {
      background: "rgba(255, 255, 255, 0)",
    },
  };

  return (
    <Modal
      id="modal-tracklist-confirmation"
      isOpen={true}
      style={customStyles}
      onRequestClose={onClose}
    >
      <div className="modal-content">
        <Cancel id="close-modal" onClick={handleClose} />
        <h2>
          Thanks for sharing your tracklist, your show is saved and going live!{" "}
        </h2>
        <div className="input-buttons">
          <button onClick={handleConfirm}>Awesome!</button>
        </div>
      </div>
    </Modal>
  );
};
export default TracklistSavedModal;
