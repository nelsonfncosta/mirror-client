import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Signup from "./components/Signup";
import Login from "./components/Login";
import IsPrivate from "./components/IsPrivate";
import IsAnon from "./components/IsAnon";
import HomePage from "./components/HomePage";
import EntryList from "./components/EntryList";
import EntryDetails from "./components/EntryDetails";
import CreateEntry from "./components/CreateEntry";
import EditEntry from "./components/EditEntry";
import UserProfile from "./components/UserProfile";
import Footer from "./components/Footer";
import Stats from "./components/Stats";

function App() {
  return (
    <div style={{ backgroundColor: "#F0ECE3" }}>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/entries"
          element={
            <IsPrivate>
              <EntryList />
            </IsPrivate>
          }
        />
        <Route
          path="/entries/:entryId"
          element={
            <IsPrivate>
              <EntryDetails />
            </IsPrivate>
          }
        />
        <Route
          path="/entries/create"
          element={
            <IsPrivate>
              <CreateEntry />
            </IsPrivate>
          }
        />
        <Route
          path="/entries/:entryId/edit"
          element={
            <IsPrivate>
              <EditEntry />
            </IsPrivate>
          }
        />
        <Route
          path="/user/:userId"
          element={
            <IsPrivate>
              <UserProfile />
            </IsPrivate>
          }
        />
        <Route
          path="/stats"
          element={
            <IsPrivate>
              <Stats />
            </IsPrivate>
          }
        />

        <Route
          path="/signup"
          element={
            <IsAnon>
              <Signup />
            </IsAnon>
          }
        />

        <Route
          path="/login"
          element={
            <IsAnon>
              <Login />
            </IsAnon>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
