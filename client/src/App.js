import React, { useState, useEffect } from "react";
import "./App.css";

import Navbar from "./layout/Navbar";

function App() {
  const [backendData, setBackendData] = useState([]);

  useEffect(() => {
    fetch("/api").then((response) =>
      response.json().then((data) => {
        setBackendData(data);
      })
    );
  }, []);

  return (
    <div>
      <Navbar />
      <h1 className="text-3xl text-center my-4">express + react</h1>

      {typeof backendData.users === "undefined" ? (
        <p className="text-gray-600">Loading...</p>
      ) : (
        backendData.users.map((user, index) => <p key={index}>{user}</p>)
      )}
    </div>
  );
}

export default App;
