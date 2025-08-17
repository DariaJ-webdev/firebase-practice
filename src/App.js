import React, { useState, useEffect } from 'react';
import NavBar from './Components/NavBar.jsx';
import Modal from './Components/Modal.jsx';
import LoginForm from './Components/LoginForm.jsx';
import RegisterForm from './Components/registerForm.jsx';
import {auth} from "./firebase/init.js";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged} from "firebase/auth";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState(null);
  const [showModal, setShowModal] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (email, password) => {
    setIsLoading(true);
    // Simulate a Firebase login
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUserEmail(email);
      setIsLoggedIn(true);
      setShowModal(null);
    } catch (error) {
      console.error("Login failed", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegister = async (email, password) => {
    setIsLoading(true);
    // Simulate a Firebase registration
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      setUserEmail(email);
      setIsLoggedIn(true);
      setShowModal(null);
    } catch (error) {
      console.error("Registration failed", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserEmail(null);
  };

  useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, update state
      setIsLoggedIn(true);
      setUserEmail(user.email);
    } else {
      // User is signed out, reset state
      setIsLoggedIn(false);
      setUserEmail(null);
    }
  });

  // Cleanup function to detach the listener when the component unmounts
  return () => unsubscribe();
}, []); 

  return (
    <div>
      <NavBar
        isLoggedIn={isLoggedIn}
        userEmail={userEmail}
        onLoginClick={() => setShowModal('login')}
        onRegisterClick={() => setShowModal('register')}
        onLogoutClick={handleLogout}
      />
      {showModal && (
        <Modal onClose={() => setShowModal(null)} isLoading={isLoading}>
          {showModal === 'login' ? (
            <LoginForm onSubmit={handleLogin} />
          ) : (
            <RegisterForm onSubmit={handleRegister} />
          )}
        </Modal>
      )}
    </div>
  );
}

export default App;