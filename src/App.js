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
  const [user, setUser] = useState(null); // Change: Store the user object
  const [showModal, setShowModal] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (email, password) => {
    setIsLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user); // Change: Set the entire user object
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
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user); // Change: Set the entire user object
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
    setUser(null); // Change: Reset the user object on logout
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        setIsLoggedIn(true);
        setUser(authUser); // Change: Use the user object from onAuthStateChanged
      } else {
        setIsLoggedIn(false);
        setUser(null); // Change: Reset the user object
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      <NavBar
        isLoggedIn={isLoggedIn}
        user={user} // Change: Pass the user object to NavBar
        onLoginClick={() => setShowModal('login')}
        onRegisterClick={() => setShowModal('register')}
        onLogoutClick={handleLogout}
      />
      {showModal && (
        <Modal showModal={showModal} onClose={() => setShowModal(null)} isLoading={isLoading}>
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