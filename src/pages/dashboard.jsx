import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchAllGuests, fetchMyGuests, logOut } from "../api/authAPI";
import Layout from "../components/Layout";
import { unauthenticateUser } from "../redux/slices/authSlice";
import ListGuest from "../components/dashboard/guestlist/ListGuests";
import InputGuest from "../components/dashboard/guestlist/InputGuest";

const Dashboard = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [allGuests, setAllGuests] = useState([]);
  const [myGuests, setMyGuests] = useState([]);
  const [guestChange, setGuestChange] = useState(false);
  const [currentEmail, setCurrentEmail] = useState("");
  const [totalGuests, setTotalGuests] = useState(0);
  const [myTotalGuests, setMyTotalGuests] = useState(0);

  const LoggingOut = async () => {
    try {
      await logOut();

      dispatch(unauthenticateUser());
      localStorage.removeItem("isAuth");
    } catch (error) {
      console.log(error.response);
    }
  };

  const protectedInfo = async () => {
    try {
      const { data } = await fetchMyGuests();
      setMyGuests(data);
      setCurrentEmail(data[0].user_email);
      setLoading(false);
    } catch (error) {
      console.log(error.response);
      LoggingOut();
    }
  };

  useEffect(() => {
    protectedInfo();

    if (currentEmail) {
      const allUserLists = async () => {
        try {
          const { data } = await fetchAllGuests();
          data.sort((a, b) => a.guest_name.localeCompare(b.guest_name));
          setAllGuests(data);
          const total = data.reduce(
            (acc, guest) => acc + guest.guest_number,
            0
          );
          setTotalGuests(total);
          const myGuestTotal = data
            .filter((guest) => guest.user_email === currentEmail)
            .reduce((acc, guest) => acc + guest.guest_number, 0);
          setMyTotalGuests(myGuestTotal);

          setLoading(false);
        } catch (error) {
          console.log(error.response);
          LoggingOut();
        }
      };

      allUserLists();
    }
  }, [currentEmail, guestChange]);

  const adminEmails = ["stephanie.chinapen@gmail.com", "isaacpure@gmail.com"];
  const adminUser = adminEmails.includes(currentEmail);

  return loading ? (
    <Layout>
      <h1>Loading...</h1>13
    </Layout>
  ) : (
    <div>
      <Layout>
        <div className="flex justify-between mt-3">
          <InputGuest
            guestChange={guestChange}
            setGuestChange={setGuestChange}
          />
          <div className="flex mt-5 justify-around">
            {adminUser ? <h2>My Guest List</h2> : <h2>All Guests List</h2>}
          </div>
          <ListGuest
            guestChange={guestChange}
            allGuests={allGuests}
            myGuests={myGuests}
            setGuestChange={setGuestChange}
            currentEmail={currentEmail}
          />
        </div>

        <div className="flex justify-between mt-3">
          {adminUser ? <div>Total Guests: {totalGuests}</div> : null}
          <div>Your Guests: {myTotalGuests}</div>
        </div>
        <button
          onClick={() => LoggingOut()}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Logout
        </button>
      </Layout>
    </div>
  );
};

export default Dashboard;
