import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./componets/Header";
import React from "react";
import Login from "./componets/LoginSignup";
import AddUserVehicle from "./componets/AddUserVehicle";

// import Route from "./protectedRoutes/ProtectedRoute";

function App() {
  const isAuthenticated = localStorage.getItem("isLoggedIn");
  console.log("is authenticated:", isAuthenticated);
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          {!isAuthenticated ? (
            <Route path="/login" element={<Login />}></Route>
          ) : (
            <>

              <Route
                path="/user/vehicle"
                isAuthenticated={isAuthenticated}
                element={<AddUserVehicle />}
              ></Route>
              <Route
                path="/"
                isAuthenticated={isAuthenticated}
                element={<AddUserVehicle />}
              ></Route>
              <Route path="/signup" element={<Login />}></Route>

            </>
          )}
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
