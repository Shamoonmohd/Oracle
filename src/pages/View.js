import React from 'react';
import { useState, useEffect } from "react";
import fireDb from '../firebase';
import {useHistory, useParams, Link} from "react-router-dom";
import "./View.css"


const View = () => {

  const [user, setUser] = useState({});

  const {id} = useParams();

  useEffect(() => {
    fireDb
    .child(`Property_Info_Db/${id}`)
    .get()
    .then((snapshot) => {
      if(snapshot.exists()){
        setUser({...snapshot.val() });
      } else {
        setUser({});
      }
    });
  }, [id]);

  console.log("user", user);

  return (
    <div style={{marginTop:'150px'}}>
    <div className='card'>
      <div className='card-header'>
        <p>Property Information</p>
      </div>
      <div className='container'>
        <strong>ID:</strong>
        <span>{id}</span>
        <br/>
        <br/>
        <strong>Property Name: </strong>
        <span>{user.PropertyName}</span>
        <br/>
        <br/>
        <strong>PropertyBlockownTokenId: </strong>
        <span>{user.PropertyBlockownTokenId}</span>
        <br/>
        <br/>
        <strong>Originator: </strong>
        <span>{user.Originator}</span>
        <br/>
        <br/>
        <strong>Address: </strong>
        <span>{user.Address}</span>
        <br/>
        <br/>
        <strong>Token Name:</strong>
        <span>{user.TokenName}</span>
        <br/>
        <br/>
        <strong>BlockChain: </strong>
        <span>{user.BlockChain}</span>
        <br/>
        <br/>
        <Link to="/">
          <button className='btn btn-edit' style={{alignContent:'center'}}>Main Menu</button>
        </Link>

      </div>
    </div>
      <h4> View </h4>
    </div>
  )
}

export default View
