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
      setLoading(false);
      console.log(myGuests);
    } catch (error) {
      console.log(error.response);
      LoggingOut();
    }
  };
  // const allUserLists = async () => {
  //   try {
  //     const { data } = await fetchAllGuests();

  //     setMyGuests(data);
  //     setLoading(false);
  //   } catch (error) {
  //     console.log(error.response);
  //     LoggingOut();
  //   }
  // };

  useEffect(() => {
    protectedInfo();
    // allUserLists();
    console.log(myGuests);
  }, [guestChange, myGuests]);

  return loading ? (
    <Layout>
      <h1>Loading...</h1>
    </Layout>
  ) : (
    <div>
      <Layout>
        <h1>Dashboard</h1>
        <div>
          <div className="d-flex mt-5 justify-content-around">
            <h2>My Guest List</h2>
          </div>
          <InputGuest setGuestChange={setGuestChange} />
          <ListGuest
            allGuests={allGuests}
            myGuests={myGuests}
            setGuestChange={setGuestChange}
          />
        </div>

        <button onClick={() => LoggingOut()} className="btn btn-primary">
          Logout
        </button>
      </Layout>
    </div>
  );
};

export default Dashboard;
