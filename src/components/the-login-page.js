import React,{useState,useEffect} from 'react';
import {firebase} from '../sdk_firebase';
import Login from './login';
import Dashboard from './dashboard';
import {BrowserRouter, Switch, Route } from 'react-router-dom';

function Logging_in() {
    const [user,setUser]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [emailError,setEmailError]=useState("");
  const [passwordError,setPasswordError]=useState("");
  const [accountExist,setAccountExist]=useState(false);
  const [listTitle,setListTitle]=useState("");
  const [listDescription,setListDescription]=useState("");

  const clearInputs = ()=>{
    setEmail('');
    setPassword('');
    setListTitle('');
    setListDescription('');
  }

  const clearErrors = ()=>{
    setEmailError('')
    setPasswordError('')
    setListTitle('');
    setListDescription('');
  }
//User Login handler, login the user properly and the user gets added to firbase auth.
  const handleLogin =()=>{
    clearErrors();
    firebase
        .auth()
        .signInWithEmailAndPassword(email,password)
        .catch((error)=>{
          switch (error.code){
            case "auth/invalid-email":
            case "auth/user-disabled":
            case "auth/user-not-found":
              setEmailError(error.message);
              break;
              case "auth/wrong-password":
              setPasswordError(error.message);
              break;
          }
        });
  };

  const handleSignUp = ()=>{
    clearErrors();
    firebase
        .auth()
        .signInWithEmailAndPassword(email,password)
        .catch((error)=>{
          switch (error.code) {
            case "auth/email-already-in-use":
            case "auth/invalid-email":
              setEmailError(error.message);
              break;
            case "auth/weak-password":
              setPasswordError(error.message);
              break;
          }
        });
  }

  const handleLogout=()=>{
    firebase.auth().signOut();
  };

  const authListener = () =>{
    firebase.auth().onAuthStateChanged((user)=>{
          if (user) {
            clearInputs();
            setUser(user);
          }else{
            setUser("");
          }
        });
  };

useEffect(()=>{
  authListener();
},[])

return(
    <div>
         {user ? (
        <Dashboard
        handleLogout={handleLogout}
        
        listTitle={listTitle}
        setListTitle={setListTitle}
        listDescription={listDescription}
        setListDescription={setListDescription}
        />
      ):(<Login
        email={email}
        setEmail = {setEmail}
        password = {password}
        setPassword={setPassword}
        handleLogin={handleLogin}
        handleSignUp={handleSignUp}
        accountExist={accountExist}
        setAccountExist={setAccountExist}
        emailError={emailError}
        passwordError={passwordError}
        />
    )}
      
      
    </div>
    );

}
export default Logging_in;
