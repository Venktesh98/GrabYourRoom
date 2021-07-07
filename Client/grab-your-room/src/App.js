import "./App.css";
import Home from "./components/Home/Home";
import SearchRoom from "./components/Search/SearchRoom";
import About from "./components/About.jsx";
import { Route, Switch } from "react-router";
import AllRooms from "./components/Rooms/AllRooms/AllRooms";
import RoomDetails from "./components/Rooms/RoomDetails/RoomDetails";
import RoomReceipt from "./components/Rooms/Receipt/RoomReceipt";
import CssBaseline from "@material-ui/core/CssBaseline";
import Navbar from "./components/Navbar/Navbar";
import DataPersistContext from "./Context/StateContext";
import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_USER } from "./queries/queries";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  checkIn: new Date(),
  checkOut: new Date(),
};

function App() {
  let userId = JSON.parse(localStorage.getItem("userId"));

  const [usersData, setUsersData] = useState(initialValues);
  const [email, setEmail] = useState("");
  const { data } = useQuery(GET_USER, {
    variables: { id: userId },
  });

  // For persisting the username on the receipt after global refresh
  useEffect(() => {
    if (data) {
      console.log("RESPONSE USER IN APP JS", data);
      setUsersData(data.user);
      setEmail(data.user.email);
    }
  }, [data]);

  return (
    <div>
      {/* Context Api implementation */}
      <DataPersistContext.Provider
        value={{
          usersDataValue: [usersData, setUsersData],
          usersEmail: [email, setEmail],
        }}
      >
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/search-room" component={SearchRoom} exact />
          <Route path="/rooms-listing" component={AllRooms} exact />
          <Route path="/about" component={About} exact />
          <Route path="/room-details/:id" component={RoomDetails} exact></Route>
          <Route path="/room-receipt" component={RoomReceipt} exact></Route>
        </Switch>
      </DataPersistContext.Provider>
    </div>
  );
}

export default App;
