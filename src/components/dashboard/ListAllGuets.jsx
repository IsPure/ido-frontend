import { useState, useEffect } from "react";
import EditGuest from "./EditGuest";
import { deleteGuest } from "../../../api/authAPI";

const ListGuest = ({ allGuests, setGuestChange, myGuests }) => {
  const [guest, setGuest] = useState([]); //empty array

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
            <th>User</th>
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

          {myGuests.length !== 0 &&
            myGuests[0].guest_id !== null &&
            myGuests.map((guest) => (
              <tr key={guest.guest_id}>
                <td>{guest.guest_name}</td>
                <td>{guest.guest_number}</td>
                <td>{guest.address}</td>
                <td>{guest.std_sent}</td>
                <td>{guest.invite_sent}</td>
                <td>{guest.rsvp_status}</td>
                <td>{guest.user_email}</td>
                <td>
                  {/* <EditGuest guest={guest} setGuestChange={setGuestChange} /> */}
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

// import { useState, useEffect } from "react";
// import EditGuest from "./EditGuest";
// import { deleteGuest } from "../../../api/authAPI";

// const ListGuest = ({ allGuests, setGuestChange, myGuests }) => {
//   const [guest, setGuest] = useState([]); //empty array

//   //delete guest function

//   useEffect(() => {
//     setGuest(myGuests);
//   }, [myGuests]);

//   return (
//     <>
//       {" "}
//       <table className="table mt-5">
//         <thead>
//           <tr>
//             <th>User</th>
//             <th>Name</th>
//             <th>Number of Guests</th>
//             <th>Address</th>
//             <th>STD Sent</th>
//             <th>Invite Sent</th>
//             <th>RSVP Status</th>
//             <th>Edit</th>
//             <th>Delete</th>
//           </tr>
//         </thead>
//         <tbody>
//           {/*<tr>
//             <td>John</td>
//             <td>Doe</td>
//             <td>john@example.com</td>
//           </tr> */}

//           {myGuests.length !== 0 &&
//             myGuests[0].guest_id !== null &&
//             myGuests.map((guest) => (
//               <tr key={guest.guest_id}>
//                 <td>{guest.user_email}</td>
//                 <td>{guest.guest_name}</td>
//                 <td>{guest.guest_number}</td>
//                 <td>{guest.address}</td>
//                 <td>{guest.std_sent}</td>
//                 <td>{guest.invite_sent}</td>
//                 <td>{guest.rsvp
