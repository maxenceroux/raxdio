import React, { useState, useEffect } from "react";
import "../schedule.css";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import SlotConfirmationModal from "./SlotConfirmationModal";
import SlotDescriptionModal from "./SlotDescriptionModal";
const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const Schedule = () => {
  const [schedule, setSchedule] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [shows, setShows] = useState([]);
  const [selectedShow, setSelectedShow] = useState();
  const [showSlotConfirmationModal, setShowSlotConfirmationModal] =
    useState(false);
  const [showSlotDescriptionModal, setShowSlotDescriptionModal] =
    useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    const now = new Date();
    const startDate = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      8,
      0,
      0
    );
    const endDate = new Date(startDate.getTime() + 7 * 24 * 60 * 60 * 1000);
    const newSchedule = [];

    for (let hour = 8; hour <= 23; hour++) {
      const time = `${hour < 10 ? "0" + hour : hour}:00`;
      const hourSchedule = [];

      for (
        let date = new Date(startDate);
        date <= endDate;
        date.setDate(date.getDate() + 1)
      ) {
        const dayOfWeek = daysOfWeek[date.getDay()];
        const start = new Date(
          date.getFullYear(),
          date.getMonth(),
          date.getDate(),
          hour,
          0,
          0
        );
        const end = new Date(start.getTime() + 60 * 60 * 1000);
        hourSchedule.push({ dayOfWeek, time, start, end });
      }
      newSchedule.push(hourSchedule);
    }
    setSchedule(newSchedule);
  }, []);

  useEffect(() => {
    console.log(process.env.REACT_APP_API_URL);
    fetch(`${process.env.REACT_APP_API_URL}/shows`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Shows data:", data);
        setShows(data);
      })
      .catch((error) => {
        console.error("Error fetching shows:", error);
      });
  }, []);

  const handleSlotClick = (start) => {
    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const selectedTime = new Date(
      start.toLocaleString("en-US", { timeZone: userTimeZone })
    );
    const show = shows.find((show) => {
      const showTime = new Date(show.start_time).toLocaleString("en-US", {
        timeZone: userTimeZone,
      });
      return new Date(showTime).getTime() === selectedTime.getTime();
    });

    if (show) {
      setShowSlotDescriptionModal(true);
      setSelectedShow(show);
    } else {
      setShowSlotConfirmationModal(true);
    }
    setSelectedSlot(selectedTime);
  };

  const handleValidateSlot = () => {
    navigate(`/submit-show/${selectedSlot.toISOString()}`);
  };

  return (
    <div className="schedule">
      <Header />
      <div className="schedule__header">
        <div className="schedule__hour-column" />
        {schedule[0]?.map((slot, index) => (
          <div key={index} className="schedule__day-column">
            {slot.dayOfWeek}
          </div>
        ))}
      </div>
      <div className="schedule__body">
        {schedule.map((hourSchedule, index) => (
          <div key={index} className="schedule__hour-row">
            <div className="schedule__hour-cell">{hourSchedule[0].time}</div>
            {hourSchedule.map((slot, index) => {
              const show = shows.find(
                (show) =>
                  new Date(show.start_time) < slot.end &&
                  new Date(show.start_time).getTime() + 60 * 60 * 1000 >
                    slot.start.getTime()
              );
              return (
                <div
                  key={index}
                  className={`schedule__day-cell ${
                    show ? "existing-show" : ""
                  } ${
                    selectedSlot?.time === slot.time &&
                    selectedSlot?.dayOfWeek === slot.dayOfWeek &&
                    "schedule__day-cell--selected"
                  }`}
                  onClick={() => handleSlotClick(slot.start)}
                >
                  {show ? `${show.name} by ${show.author}` : "-"}
                </div>
              );
            })}
          </div>
        ))}
      </div>
      {showSlotConfirmationModal && (
        <SlotConfirmationModal
          slot={selectedSlot}
          onClose={() => setShowSlotConfirmationModal(false)}
          onConfirm={handleValidateSlot}
        />
      )}
      {showSlotDescriptionModal && (
        <SlotDescriptionModal
          show={selectedShow}
          onClose={() => setShowSlotDescriptionModal(false)}
        />
      )}
    </div>
  );
};

export default Schedule;
