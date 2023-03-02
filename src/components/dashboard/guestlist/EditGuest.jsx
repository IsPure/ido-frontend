import { useState } from "react";
import { updateGuest } from "../../../api/authAPI";

const EditGuest = ({ guest, setGuestChange, guestChange }) => {
  const [updatedGuest, setUpdatedGuest] = useState({
    name: guest.guest_name,
    numGuest: guest.guest_number,
    address: guest.address,
    rsvpStatus: guest.rsvp_status,
    inviteStatus: guest.invite_sent,
    stdStatus: guest.std_status,
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedGuestData = await updateGuest(guest.guest_id, updatedGuest);
      setGuestChange(!guestChange); // update the state to re-render the component
      setUpdatedGuest(updatedGuestData);
    } catch (error) {
      console.log(error.message);
    }
    console.log(updateGuest);
  };
  return (
    <>
      <button
        type="button"
        className="btn btn-warning"
        data-bs-toggle="modal"
        data-bs-target={`#id${guest.guest_id}`}
      >
        Edit
      </button>
      <div
        className="modal fade"
        id={`id${guest.guest_id}`}
        tabIndex="-1"
        aria-labelledby={`id${guest.guest_id}`}
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit Guest</h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <form onSubmit={onSubmit}>
              <div className="modal-body">
                <div className="mb-3">
                  <label
                    htmlFor={`name${guest.guest_id}`}
                    className="form-label"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id={`name${guest.guest_id}`}
                    value={updatedGuest.name}
                    onChange={(e) =>
                      setUpdatedGuest((prevState) => ({
                        ...prevState,
                        name: e.target.value,
                      }))
                    }
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor={`numGuest${guest.guest_id}`}
                    className="form-label"
                  >
                    Number of Guests
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id={`numGuest${guest.guest_id}`}
                    value={updatedGuest.numGuest}
                    onChange={(e) =>
                      setUpdatedGuest((prevState) => ({
                        ...prevState,
                        numGuest: e.target.value,
                      }))
                    }
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor={`address${guest.guest_id}`}
                    className="form-label"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id={`address${guest.guest_id}`}
                    value={updatedGuest.address}
                    onChange={(e) =>
                      setUpdatedGuest((prevState) => ({
                        ...prevState,
                        address: e.target.value,
                      }))
                    }
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor={`std${guest.guest_id}`}
                    className="form-label"
                  >
                    STD Status
                  </label>
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id={`std${guest.guest_id}`}
                    checked={updatedGuest.stdStatus}
                    onChange={(e) =>
                      setUpdatedGuest((prevState) => ({
                        ...prevState,
                        stdStatus: e.target.checked ? true : false,
                      }))
                    }
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor={`invite${guest.guest_id}`}
                    className="form-label"
                  >
                    Invite Sent
                  </label>
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id={`invite${guest.guest_id}`}
                    checked={updatedGuest.inviteStatus}
                    onChange={(e) =>
                      setUpdatedGuest((prevState) => ({
                        ...prevState,
                        inviteStatus: e.target.checked ? true : false,
                      }))
                    }
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor={`rsvp${guest.guest_id}`}
                    className="form-label"
                  >
                    RSVP Status
                  </label>
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id={`rsvp${guest.guest_id}`}
                    checked={updatedGuest.rsvpStatus}
                    onChange={(e) =>
                      setUpdatedGuest((prevState) => ({
                        ...prevState,
                        rsvpStatus: e.target.checked ? true : false,
                      }))
                    }
                  />
                </div>
              </div>

              <div className="modal-footer">
                <button
                  data-bs-dismiss="modal"
                  type="submit"
                  className="btn btn-warning"
                >
                  Update
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditGuest;
