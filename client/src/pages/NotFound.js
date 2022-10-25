import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate(-1);
    }, 1000);
  });
  return (
    <div className="text-3xl text-red-500 text-center my-12 bg-black">
      404 page not found
    </div>
  );
}

export default NotFound;
