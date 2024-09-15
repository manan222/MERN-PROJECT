import "./App.css";
import { Route, Routes } from "react-router-dom";
import React from "react";
import CreateUpdateTask from "./containers/CreateUpdateTask";
import TaskListing from "./containers/TaskListing";
import Header from "./componets/Header";



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
          <Route
            path="/task"
            isAuthenticated={isAuthenticated}
            element={<CreateUpdateTask />}
          ></Route>
          <Route
            path="/task/:id"
            isAuthenticated={isAuthenticated}
            element={<CreateUpdateTask />}
          ></Route>
          <Route
            path="/"
            isAuthenticated={isAuthenticated}
            element={<TaskListing />}
          ></Route>
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
