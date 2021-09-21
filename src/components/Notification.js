import React from "react";

const Notification = ({ showNotification }) => {
  return (
    <div className={`notification-container ${showNotification ? "show" : ""}`}>
      <p>Type different letter</p>
    </div>
  );
};

export default Notification;
