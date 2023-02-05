import { useState, useEffect } from "react";
import EditGuest from "./EditGuest";

const ListGuest = ({ allGuests, setGuestChange }) => {
  console.log(allGuests);
  const [guest, setGuest] = useState([]); //empty array

  //delete guest function

  async function deleteGuest(id) {
    try {
      await fetch(`http://localhost:5000/api/guest/${id}`, {
        method: "DELETE",
        headers: { jwt_token: localStorage.token },
      });

      setGuest(guest.filter((guest) => guest.guest_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  }

  // async function getTodos() {
  //   const res = await fetch("http://localhost:5000/todos");

  //   const todoArray = await res.json();

  //   setTodos(todoArray);
  // }

  useEffect(() => {
    setGuest(allGuests);
  }, [allGuests]);

  console.log(guest);

  return (
    <>
      {" "}
      <table className="table mt-5">
        <thead>
          <tr>
            <th>Name</th>
            <th>Number of Guests</th>
            <th>Address</th>
            <th>STD Sent</th>
            <th>Invite Sent</th>
            <th>RSVP Status</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {/*<tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
          </tr> */}

          {guest.length !== 0 &&
            guest[0].guest_id !== null &&
            allGuests.map((guest) => (
              <tr key={guest.guest_id}>
                <td>{guest.guest_name}</td>
                <td>{guest.guest_number}</td>
                <td>{guest.address}</td>
                <td>{guest.std_sent}</td>
                <td>{guest.invite_sent}</td>
                <td>{guest.rsvp_status}</td>
                <td>
                  <EditGuest guest={guest} setGuestChange={setGuestChange} />
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteGuest(guest.guest_id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default ListGuest;
