import React, { useState, useEffect } from "react";
import "./App.css";

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
      <h1 className="text-3xl text-center">express + react</h1>

      {typeof backendData.users === "undefined" ? (
        <p>Loading...</p>
      ) : (
        backendData.users.map((user, index) => <p key={index}>{user}</p>)
      )}
    </div>
  );
}

export default App;
