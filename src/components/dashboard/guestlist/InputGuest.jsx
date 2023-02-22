import { useState } from "react";
import { createGuest } from "../../../api/authAPI";
import { authenticateUser } from "../../../redux/slices/authSlice";

const InputGuest = ({ setGuestChange }) => {
  const [newGuest, setNewGuest] = useState({
    name: "",
    numGuest: "",
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!newGuest.name) {
      // Display an error message or handle the error in some other way
      console.log("Guest name is required");
      return;
    }
    if (!newGuest.numGuest) {
      // Display an error message or handle the error in some other way
      console.log("Number of guests is required");
      return;
    }
    try {
      const data = newGuest;
      console.log(data);
      console.log(newGuest);
      await authenticateUser(); // send the authentication token to the server
      const response = await createGuest(data);
      // console.log(response);
      setGuestChange(true); // update the state to re-render the component
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <h1 className="text-center my-5">Add Guest</h1>
      <form className="d-flex" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Input name of guest/family"
          className="form-control"
          value={newGuest.name}
          onChange={(e) => setNewGuest({ ...newGuest, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Input number of guests"
          className="form-control"
          value={newGuest.numGuest}
          onChange={(e) =>
            setNewGuest({ ...newGuest, numGuest: e.target.value })
          }
        />
        <button className="btn btn-success">Add</button>
      </form>
    </>
  );
};

export default InputGuest;
