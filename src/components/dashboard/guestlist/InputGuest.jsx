// import React, { useState } from "react";

// const InputGuest = ({ setTodosChange }) => {
//   const [name, setName] = useState("");

//   const onSubmitForm = async (e) => {
//     e.preventDefault();
//     try {
//       const myHeaders = new Headers();

//       myHeaders.append("Content-Type", "application/json");
//       myHeaders.append("jwt_token", localStorage.token);

//       const body = { name };
//       const response = await fetch("http://localhost:5000/api/addGuest", {
//         method: "POST",
//         headers: myHeaders,
//         body: JSON.stringify(body),
//       });

//       const parseResponse = await response.json();

//       console.log(parseResponse);

//       setTodosChange(true);
//       setDescription("");
//       // window.location = "/";
//     } catch (err) {
//       console.error(err.message);
//     }
//   };
//   return (
//     <>
//       <h1 className="text-center my-5">Input Todo</h1>
//       <form className="d-flex" onSubmit={onSubmitForm}>
//         <input
//           type="text"
//           placeholder="add todo"
//           className="form-control"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//         />
//         <button className="btn btn-success ">Add</button>
//       </form>
//     </>
//   );
// };

// export default InputTodo;
