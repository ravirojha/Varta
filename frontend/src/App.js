import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";import './App.css';
import LoginPage from "./authPages/LoginPage/LoginPage";
import RegisterPage from "./authPages/RegisterPage/RegisterPage";
import Dashboard from "./Dashboard/Dashboard";
import NotFound from "./Not-Found/Not-Found";
import AlertNotification from "./shared/components/AlertNotification";

function App() {
  return (
    <>
    <Router>
        <Routes>
            <Route path={'/login'} element={<LoginPage />}/>
            <Route path={'/register'} element={<RegisterPage />}/>
            <Route path={'/dashboard'} element={<Dashboard />}/>
            <Route path={'/'} element={<Dashboard />}/>
            <Route path={'*'} element={<NotFound />}/>
        </Routes>
    </Router>
        <AlertNotification />
    </>
  );
}

export default App;
