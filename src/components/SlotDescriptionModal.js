import React from "react";
import Modal from "react-modal";
import "./modals.css";
import { ReactComponent as Cancel } from "../assets/cancel.svg";
import { ReactComponent as IG } from "../assets/ig.svg";
import { ReactComponent as BC } from "../assets/bc.svg";
import { ReactComponent as SC } from "../assets/sc.svg";
const SlotDescriptionModal = ({ show, onClose }) => {
  const handleClose = () => {
    onClose();
  };
  Modal.setAppElement("#root");

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
      id="modal-description"
      isOpen={true}
      style={customStyles}
      onRequestClose={onClose}
    >
      <div className="modal-content">
        <Cancel id="close-modal" onClick={handleClose} />

        <div className="show-description">
          <p id="show-name">{show.name}</p>
          <p className="show-info">curated by: {show.author}</p>
          <p className="show-info">{formatDate(new Date(show.start_time))}</p>
          <p>{show.description}</p>
          <div className="show-links">
            {show.ig_url ? (
              <a href={show.ig_url} target="_blank" rel="noopener noreferrer">
                <IG className="modal-logo" />
              </a>
            ) : null}
            {show.bandcamp_url ? (
              <a
                href={show.bandcamp_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <BC id="bc-logo" className="modal-logo" />{" "}
              </a>
            ) : null}
            {show.soundcloud_url ? (
              <a
                href={show.soundcloud_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SC className="modal-logo" />
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </Modal>
  );
};
export default SlotDescriptionModal;
