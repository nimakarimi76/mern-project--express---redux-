import React, { useState, useEffect } from "react";

function Fetch() {
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
      {typeof backendData.users === "undefined" ? (
        <p className="text-gray-600">Loading...</p>
      ) : (
        backendData.users.map((user, index) => <p key={index}>{user}</p>)
      )}
    </div>
  );
}

export default Fetch;
