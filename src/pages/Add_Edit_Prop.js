import React,{useState, useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import './AddEdit.css';
import fireDb from '../firebase'
import {toast} from 'react-toastify';

const initialState = {
  PropertyName:"",
  PropertyBlockownTokenId:"",
  Originator:"",
  Address:"",
  TokenName:"",
  BlockChain:"",
}

const Add_Edit_Prop = () => {
  const [state, setState] = useState(initialState);
  const [data, setData] = useState({});

  const  {PropertyName, PropertyBlockownTokenId, Originator, Address, TokenName, BlockChain} = state;

  const history = useNavigate();
  
  const {id} = useParams();

  useEffect(() =>{
    fireDb.child("Property_Info_Db").on("value", (snapshot) => {
      if(snapshot.val()!==null) {
        setData({ ...snapshot.val() });
      } else {
        setData({});
      }
    });

    return () => {
      setData({});
    };
  }, [id]);

  useEffect(() => {
      if(id) {
        setState({...data[id]})
      }
      else {
        setState({...initialState})
      }

      return() => {
        setState({...initialState});
      };
  }, [id, data]);
  
  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setState({ ...state, [name]:value});
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if(!PropertyName || !PropertyBlockownTokenId || !Originator || !Address || !TokenName || !BlockChain) 
    {
      toast.error("Please provide value in each input field");
    } else 
    {
      if(!id)
      {
        fireDb.child("Property_Info_Db").push(state, (err) => {
          if(err){
            toast.error(err);
          } else {
            toast.success("Property information saved successfully")
          }
        });
        
      }
      else {
        fireDb.child(`Property_Info_Db/${id}`).set(state, (err) => {
          if(err){
            toast.error(err);
          } else {
            toast.success("Property information updateed successfully")
          }
        });

      }
     
      setTimeout(() => history.push('/'), 500);
    }
  };




  return (
    <div style={{marginTop:'100px'}}>
      <h4>Add_Edit_Prop</h4>
      <form style={{
        margin:"auto",
        padding:"15px",
        maxWidth:"400px",
        alignContent:"center",
      }} onSubmit={handleSubmit}>


      <label htmlFor='PropertyName'>Property Name</label>
      <input type="text" id="PropertyName" name="PropertyName" placeholder='Add Propert Name' value={PropertyName || ""} onChange={handleInputChange}/>
      <label htmlFor='PropertyBlockownTokenId'>Property Blockown TokenId</label>
      <input type="text" id="PropertyBlockownTokenId" name="PropertyBlockownTokenId" placeholder='Add BlockOwn Property Token id' value={PropertyBlockownTokenId || ""} onChange={handleInputChange}/>
      <label htmlFor='Originator'>Originator</label>
      <input type="text" id="Originator" name="Originator" placeholder='Add Originator Name' value={Originator || ""} onChange={handleInputChange}/>
      <label htmlFor='Address'>Address</label>
      <input type="text" id="Address" name="Address" placeholder='Add Address' value={Address || ""} onChange={handleInputChange}/>
      <label htmlFor='TokenName'>Token Name</label>
      <input type="text" id="TokenName" name="TokenName" placeholder='Add Token Name' value={TokenName || ""} onChange={handleInputChange}/>
      <label htmlFor='BlockChain'>BlockChain</label>
      <input type="text" id="BlockChain" name="BlockChain" placeholder='Add BlockChain' value={BlockChain || ""} onChange={handleInputChange}/>
      
      <input type="submit" value={id ? "Update" : "Save"}/>


      </form>
    </div>
  )
}

export default Add_Edit_Prop
