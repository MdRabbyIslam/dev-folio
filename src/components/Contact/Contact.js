import React from "react";
import Nav from "../Nav/Nav";
import ParticlesBg from "particles-bg";

const Contact = () => {
  const formContainerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  const formStyle = {
    width: "40vw",
    padding: "5%",
    textAlign: "center",
    margin: "auto",
  };
  const formInputStyle = {
    width: "100%",
  };
  const inputDivStyle = {
    textAlign: "left",
  };
  const submitBtnStyle = {
    width: "100%",
    background: "royalBlue",
    //     background: "rgba(0,0,0,.5)",
    color: "white",
    border: "none",
    padding: "10px 5px",
    fontSize: "16px",
    borderRadius: "5px",
  };

  return (
    <div>
      <Nav></Nav>
      <div style={formContainerStyle}>
        <form action="POST" data-netlify="true" style={formStyle}>
          <h2 style={{ color: "royalblue" }}> Contact Me</h2>
          <div style={inputDivStyle}>
            <label htmlFor="name">Name:</label>
            <input
              style={formInputStyle}
              type="text"
              name="name"
              id="name"
              required
            />
          </div>
          <div style={inputDivStyle}>
            <label htmlFor="email">Email:</label>
            <input
              style={formInputStyle}
              type="email"
              name="email"
              id="email"
              required
            />
          </div>
          <div style={inputDivStyle}>
            <label htmlFor="message">Message:</label>
            <textarea
              style={formInputStyle}
              name="message"
              id="message"
              cols="30"
              rows="10"
              required
            ></textarea>
          </div>
          <div>
            <input
              style={{ width: "100%" }}
              type="file"
              name="myfile"
              id="myfile"
              placeholder="upoad"
            />
          </div>
          <div>
            <div data-netlify-recaptcha="true"></div>
          </div>

          <div>
            <input style={submitBtnStyle} type="submit" />
            Submit
          </div>
        </form>
      </div>
      <ParticlesBg type="ball" num={20} bg={true} />
    </div>
  );
};

export default Contact;
