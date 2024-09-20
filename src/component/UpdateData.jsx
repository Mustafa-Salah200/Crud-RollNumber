import { useState } from "react";
import PropTypes from "prop-types";

const UpdateData = ({ UpdateItem, item }) => {
  const [firstName, setFirstName] = useState(item.firstName);
  const [lastName, setLastName] = useState(item.lastName);
  const [roll, setRoll] = useState(item.roll);

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
        id: item.id,
        firstName: firstName,
        lastName: lastName,
        roll: roll,
      };
      UpdateItem(ob);
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
      <button onClick={(e) => getInput(e)}>UPDATE</button>
    </form>
  );
};
UpdateData.propTypes = {
  UpdateItem: PropTypes.func.isRequired,
};
UpdateData.propTypes = {
  item: PropTypes.object.isRequired,
};

export default UpdateData;
