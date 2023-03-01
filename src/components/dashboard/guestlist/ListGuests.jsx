import { useState, useEffect } from "react";
import EditGuest from "./EditGuest";
import { deleteGuest } from "../../../api/authAPI";

const ListGuest = ({ allGuests, setGuestChange, guestChange }) => {
  const sortedGuests = allGuests.sort((a, b) =>
    a.user_email.localeCompare(b.user_email)
  );

  return (
    <>
      <div className="table-responsive">
        <table className="table mt-5">
          <thead>
            <tr>
              <th>Name</th>
              <th>Number of Guests</th>
              <th>Address</th>
              <th>STD Sent</th>
              <th>Invite Sent</th>
              <th>RSVP Status</th>
              <th>User</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {allGuests.map((guest) => (
              <tr key={guest.guest_id}>
                <td>{guest.guest_name}</td>
                <td>{guest.guest_number}</td>
                <td>{guest.address}</td>
                <td>{guest.std_sent === true ? "Yes" : "No"}</td>
                <td>{guest.invite_sent === true ? "Yes" : "No"}</td>
                <td>{guest.rsvp_status === true ? "Yes" : "No"}</td>
                <td>{guest.user_email}</td>
                <td>
                  <EditGuest
                    guest={guest}
                    setGuestChange={setGuestChange}
                    guestChange={guestChange}
                  />
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      deleteGuest(guest.guest_id)
                        .then(() => setGuestChange((prev) => !prev))
                        .catch((error) => console.log(error));
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ListGuest;
