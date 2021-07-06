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
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

// apollo client setup
const client = new ApolloClient({
  uri: "http://localhost:8000/graphql",
  cache: new InMemoryCache(),
});

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  checkIn: new Date(),
  checkOut: new Date(),
};

function App() {
  const [usersData, setUsersData] = useState(initialValues);
  const [email, setEmail] = useState("");

  return (
    <div>
      {/* <Navbar /> */}

      {/* Context Api implementation with Apollo Provider */}
      <ApolloProvider client={client}>
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
            <Route
              path="/room-details/:id"
              component={RoomDetails}
              exact
            ></Route>
            <Route path="/room-receipt" component={RoomReceipt} exact></Route>
          </Switch>
        </DataPersistContext.Provider>
      </ApolloProvider>
    </div>
  );
}

export default App;
