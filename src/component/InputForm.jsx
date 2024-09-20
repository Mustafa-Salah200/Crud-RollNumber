import { useState } from "react";
import PropTypes from "prop-types";

const INPUT_FORM = ({ submitData }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [roll, setRoll] = useState("");

  function getInput(ele) {
    ele.preventDefault();
    if (
      firstName !== undefined &&
      firstName.length <= 10 &&
      firstName !== "" &&
      lastName !== undefined &&
      lastName !== "" &&
      lastName.length <= 10 &&
      roll !== undefined &&
      roll !== "" &&
      roll.length <= 9
    ) {
      const ob = {
        id: Date.now(),
        firstName: firstName,
        lastName: lastName,
        roll: roll,
      };
      submitData(ob);
      setFirstName("");
      setLastName("");
      setRoll("");
    }
  }
  return (
    <form>
      <div className="info">
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          onChange={(e) => setFirstName(e.target.value)}
          type="text"
          maxLength={10}
          value={firstName}
          placeholder="Should be less than 10"
        />
      </div>
      <div className="info">
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          onChange={(e) => setLastName(e.target.value)}
          type="text"
          maxLength={10}
          placeholder="Should be less than 10"
          value={lastName}
        />
      </div>
      <div className="info">
        <label htmlFor="roll">Roll No</label>
        <input
          id="roll"
          onChange={(e) => setRoll(e.target.value)}
          type="number"
          maxLength={10}
          placeholder="Should be less than 10"
          value={roll}
        />
      </div>
      <button onClick={(e) => getInput(e)}>Submit</button>
    </form>
  );
};
INPUT_FORM.propTypes = {
  submitData: PropTypes.func.isRequired,
};


export default INPUT_FORM;
