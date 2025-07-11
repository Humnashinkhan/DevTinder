import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../utils/connectionSlice";

const Connections = () => {
  const connections = useSelector((store) => store.connections);
  const dispatch = useDispatch();
  const fetchConnections = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });
      console.log(res.data.data);
      dispatch(addConnections(res.data.data));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  if (!connections) return;
  if (connections.length === 0)
    return <h1 className="text-2xl font-bold">No Connection Found!</h1>;

  return (
    <div className="text-center my-10">
      <h1 className="text-3xl font-bold">Connections</h1>
      {connections.map((connection) => {
        const {_id, firstName, lastName, photoUrl, age, gender, about } =
          connection;
        return (
          <div key={_id} className="flex m-4 p-4 rounded-lg bg-base-300 w-1/2 mx-auto">
            <div>
              <img alt="photo" className="w-20 h-20 rounded-full" src={photoUrl} />
            </div>
            <div className="text-left mx-4">
              <h2 className="font-bold text-xls">{firstName + " " + lastName}</h2>
              <h2>{age + ", " + gender}</h2>
              <p>{about}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Connections;
