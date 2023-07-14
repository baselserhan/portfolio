import "./FormStyles.css";

import React from "react";

const Form = () => {
  return (
    <div className="form">
      <form>
        <label>Your Name</label>
        <input type="text" placeholder="Your Name" />
        <label>Email</label>
        <input type="email" placeholder="Email" />
        <label>Subject</label>
        <input type="text" placeholder="Subject" />
        <label>Message</label>
        <textarea rows="6" placeholder="Type your message here"></textarea>
        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default Form;
