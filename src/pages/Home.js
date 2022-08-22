import React, {useState, useEffect} from 'react';
import fireDb from '../firebase';
import {Link} from 'react-router-dom';
import "./Home.css"
import { toast } from 'react-toastify';


const Home = () => {

  const [data, setData] = useState({});

  useEffect(() =>{
    fireDb.child("Property_Info_Db").on("value", (snapshot) =>
    {
      if(snapshot.val()!==null) {
        setData({ ...snapshot.val() });
      } else {
        setData({});
      }
    });

    return () =>{
      setData({});
    };
  }, []);


  const onDelete = (id) => {
    if(window.confirm("Are you sure that you want to delete the Property Information?"))
      {
        fireDb.child(`Property_Info_Db/${id}`).remove((err) =>{
          if(err) {
            toast.error(err);
          } else {
            toast.success("Property Information has been removed from our database")
          }
        });
      }

  };




  return (
   
    <div style={{marginTop:'100px'}}>
      <h4> Welcome to Admin Home Page </h4>
      <table className='styled-table'>
        <thead>
          <tr>
            <th styel={{textAlign:'center'}}> No.</th>
            <th styel={{textAlign:'center'}}> PropertyName</th>
            <th styel={{textAlign:'center'}}> PropertyBlockownTokenId</th>
            <th styel={{textAlign:'center'}}> Originator</th>
            <th styel={{textAlign:'center'}}> Address</th>
            <th styel={{textAlign:'center'}}> TokenName</th>
            <th styel={{textAlign:'center'}}> BlockChain</th>
            <th styel={{textAlign:'center'}}> Action</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(data).map((id, index) => {
            return (
              <tr key={id}>
                <th scope="row">{index + 1}</th>
                <td>{data[id].PropertyName}</td>
                <td>{data[id].PropertyBlockownTokenId}</td>
                <td>{data[id].Originator}</td>
                <td>{data[id].Address}</td>
                <td>{data[id].TokenName}</td>
                <td>{data[id].BlockChain}</td>
                <td>
                  <Link to={`/update/${id}`}>
                  <button className='btn btn-edit'>Edit</button>
                  </Link>
                  <button className='btn btn-delete' onClick={() => onDelete(id)}>Delete</button>
                  <Link to={`/view/${id}`}>
                  <button className='btn btn-view'>View</button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>


      </table>
      
    </div>

  );
}

export default Home
