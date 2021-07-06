import axios from "axios";
import React, { useEffect, useState } from "react";

function About(props) {
  console.log("PRops:", props);
  const [dummy, setDummy] = useState([]);
  console.log("Dummy:", props.match.params.value);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/rooms/getAllRooms/${props.match.params.value}`)
      .then((response) => {
        console.log("Response Get in About:", response.data);
		setDummy(response.data)
        // setFormResponse([...response.data]);
        // props.onClickData(response.data);
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  }, []);

  return (
    <div>
      <h1>About us</h1>
	  {dummy.map((getData) => (
		  console.log("GetData:",getData)
	  ))}
    </div>
  );
}

export default About;
