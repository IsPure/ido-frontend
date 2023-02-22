import axios from "axios";
axios.defaults.withCredentials = true;

// Login Routes
export async function onRegistration(registrationData) {
  return await axios.post(
    "http://localhost:8000/api/register",
    registrationData
  );
}
export async function onLogin(loginData) {
  return await axios.post("http://localhost:8000/api/login", loginData);
}
export async function logOut() {
  return await axios.get("http://localhost:8000/api/logout");
}

// Guest List Routes
export async function fetchAllGuests() {
  return await axios.get("http://localhost:8000/api/all-guests");
}
export async function fetchMyGuests() {
  return await axios.get("http://localhost:8000/api/my-guests");
}
export async function updateGuest(id) {
  return await axios.put(`http://localhost:8000/api/guest/${id}`);
}
export async function createGuest(data) {
  return await axios.post("http://localhost:8000/api/protected", data);
}
export async function deleteGuest(id) {
  return await axios.delete(`http://localhost:8000/api/guest/${id}`);
}
export async function singleGuest(id) {
  return await axios.get(`http://localhost:8000/api/guest/${id}`);
}
