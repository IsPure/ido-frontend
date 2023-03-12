import { useState } from "react";
import { updateGuest } from "../../../api/authAPI";

const EditGuest = ({ guest, setGuestChange, guestChange }) => {
  const [updatedGuest, setUpdatedGuest] = useState({
    guest_id: guest.guest_id,
    name: guest.guest_name,
    numGuest: guest.guest_number,
    address: guest.address,
    rsvpStatus: guest.rsvp_status,
    inviteStatus: guest.invite_sent,
    stdStatus: guest.std_sent,
  });
  const [showModal, setShowModal] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedGuestData = await updateGuest(guest.guest_id, updatedGuest);
      setGuestChange((prev) => !prev); // toggle the value of guestChange
      // rest of the code
      setShowModal(false);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <>
      <button
        type="button"
        data-bs-target={`#id${guest.guest_id}`}
        onClick={() => setShowModal(true)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-6 w-6"
          x-tooltip="tooltip"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
          />
        </svg>
      </button>
      {showModal ? (
        <form onSubmit={onSubmit}>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Modal Title</h3>
                  <button
                    type="button"
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <div>
                    <div>
                      <label htmlFor={`name${guest.guest_id}`}>Name</label>
                      <input
                        type="text"
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
                    <div>
                      <label htmlFor={`numGuest${guest.guest_id}`}>
                        Number of Guests
                      </label>
                      <input
                        type="number"
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
                    <div>
                      <label htmlFor={`address${guest.guest_id}`}>
                        Address
                      </label>
                      <input
                        type="text"
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
                    <div>
                      <label htmlFor={`std${guest.guest_id}`}>STD Status</label>
                      <input
                        type="checkbox"
                        id={`std${guest.guest_id}`}
                        checked={updatedGuest.stdStatus}
                        onChange={(e) => {
                          console.log(e.target.checked);
                          setUpdatedGuest((prevState) => ({
                            ...prevState,
                            stdStatus: e.target.checked ? true : false,
                          }));
                        }}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor={`invite${guest.guest_id}`}>
                        Invite Sent
                      </label>
                      <input
                        type="checkbox"
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
                      <label htmlFor={`rsvp${guest.guest_id}`}>
                        RSVP Status
                      </label>
                      <input
                        type="checkbox"
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
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="submit"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </form>
      ) : null}
    </>
  );
};

export default EditGuest;
