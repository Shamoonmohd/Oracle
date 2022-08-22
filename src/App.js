import React, {useState, useEffect} from 'react'
import logo from './logo.svg';
import './App.css';
import WalletCard from './components/WalletCard';
import Navbar from './components/Navbar';
import {ethers} from 'ethers'; 
import Home from './pages/Home';
import About from './pages/About';
import Add_Edit_Prop from './pages/Add_Edit_Prop';
import Contact from './pages/Contact';
import View from './pages/View';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import fireDb from './firebase';
import Login from './Login';
import { HPlusMobiledata } from '@mui/icons-material';
import Hero from './Hero';


const linksArray = ["Property Tokens", "Access Oracle api", "About", "Contact us"];

function App() {
    
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError]= useState('');
    const [passwordError, setPasswordError] = useState('');
    const [hasAccount, setHasAccount] = useState(false);

    const clearInputs = () => {
        setEmail("");
        setPassword("");
    }

    const clearErrors = () => {
        setEmailError("");
        setPasswordError("");
    }

    const handleLogin = () => {
        clearErrors();
        fireDb
        .auth()
        .signInWithEmailAndPassword(email, password)
        .catch((err)=>{
            switch(err.code) {
                case "auth/Invalid-email":
                case "auth/user-disabled":
                case "auth/user-not-account":
                    setEmailError(err.message);
                    break;
                case "auth/wrong-password":
                    setPasswordError(err.message);
                    break;
            }
        });
    }

    const handleSignup = () => {
        fireDb
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .catch((err)=>{
            switch(err.code) {
                case "auth/email-already-in-use":
                case "auth/invalid-email":
                    setEmailError(err.message);
                    break;
                case "auth/weak-password":
                    setPasswordError(err.message);
                    break;
            }
        });

    };

    const handleLogout = () => {
        fireDb
        .auth()
        .signOut();

    }

    const authListener = () => {
        fireDb.auth().onAuthStateChanged(user => {
            if(user) {
                clearInputs();
                setUser(user);
            } else {
                setUser("");

            }
        });
    };

    // useEffect(() => {
    //     authListener();
        
    // }, []);
    

    const [errorMessage, setErrorMessage] = useState(null);
    const [defualtAccount, setDefaultAccount] = useState(null);
    const [userBalance, setUserBalance] = useState(null);
    const [connButtonText, setConnButtonText] = useState('Connect Metamask Wallet');

    const connectWalletHandler =() => {
        if(window.ethereum) {
            window.ethereum.request({method: "eth_requestAccounts"})
            .then(result=> {
                accountChangeHandler(result[0]);
            })
        } else {
            // setErrorMessage('Install Metamask');
            alert("install metamask extension!!");
        }
    }

    const accountChangeHandler = (newAccount) => {
        setDefaultAccount(newAccount);
        getUserBalance(newAccount.toString());

    }

    const getUserBalance = (address) => {
        window.ethereum.request({method: "eth_getBalance", params: [address,'latest']})
        .then(balance =>{
            setUserBalance(ethers.utils.formatEther(balance));

        });
        
    }

    const chainChangedHandler = () => {
        window.location.reload();
    }
    window.ethereum.on('accountsChanged', accountChangeHandler);
    window.ethereum.on('chainChanged', chainChangedHandler);







  return (
    <BrowserRouter>
    <Navbar links={linksArray} connButtonText={connButtonText} connectWalletHandler={connectWalletHandler}/>
        <div className='App'>
        <ToastContainer position='top-center'/>

        <Routes>
        <Route exact path='/Home' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/add' element={<Add_Edit_Prop/>}/>
        <Route path='/update/:id' element={<Add_Edit_Prop/>} />
        <Route path='/view/:id' element={<View/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        </Routes>

   
        {user ? (
        <Hero handleLogout={handleLogout} user={user}/>
        ):(   
        <Login 
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleLogin={handleLogin}
        handleSignup={handleSignup}
        hasAccount={hasAccount}
        setHasAccount={setHasAccount}
        emailError={emailError}
        passwordError={passwordError}
        />) }
     
   
        
   
           
            <div className='accountDisplay'>
                <h3>Address: {defualtAccount}</h3>
            </div>
                <div className='balanceDisplay'>
                     <h3>Balance:{userBalance}</h3>
                </div>
            {errorMessage}     
        </div> 
    </BrowserRouter>
  );
}

export default App;
