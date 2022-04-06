import "./booking.css";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const axios = require('axios');

export const Booking = () => {
  const [place,setPlace]=useState({
    from:"",
    to:""
  }) 
  const [ok,setok]=useState(0)

const [choose,setChoose]=useState('')
const [train,setTrain]=useState([])
function handleChange(e){
    const {value,name}=e.target
    setPlace({
      ...place,
      [name]:value
    })
}
  //  window.location.reload();
  const navigate = useNavigate();
  function search() {
axios.get('http://localhost:3001/train')
  .then(function (response) {
    const users= response.data
      users.forEach(el => {
        if(el.from==place.from && el.to==place.to){
          setTrain([
            ...train,el
          ])
        } 
      });
  })
  .catch(function (error) {
  })
  
}
function submit(){
  alert(`Your Train Number is ${choose},Happy Journey`)
}
  function confirm(el) {
    ok == 0 ? setok(1) : setok(0)
    setChoose(el.number)
  };
  return (
    <div className="box">
      <h3>Book Ticket</h3>
      <input name='from' placeholder='from' onChange={handleChange} />
      <br/>
      <input name='to' placeholder='to' onChange={handleChange} />
      <button onClick={search} >SEARCH</button>
      
            <div className='ticket_box' style={{border:"1px solid white",borderRadius:"5px",padding:"10px"}} >
          {
              train.map(function(el){
                  return(<div onClick={()=>confirm(el)}>
         
                    <h5>Origin-{el.from}</h5>
                    <h5>Destination-{el.to}</h5>
                    <h5>Train no-{el.number}</h5>
                    <h5>Departure Time-{el.departure}</h5>
                    <h5>Arrival Time-{el.arrival}</h5>
                    <hr/>

                  </div>)
              })
          }
      </div>

      <button onClick={submit} >Submit</button>
      <button onClick={()=>{ navigate('/');}}>Logout</button>
    </div>
  );
};
