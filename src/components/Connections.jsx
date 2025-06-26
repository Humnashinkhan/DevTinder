import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import axios from "axios";

const Connections = () => {
  const fetchConnections = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });
      console.log(res.data.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  return (
    <div className="flex justify-center my-10">
      <h1 className="text-2xl font-bold">Connections</h1>
    </div>
  );
};

export default Connections;
