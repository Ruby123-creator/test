import { useEffect,useState } from "react";
import axios from 'axios';
import { useSelector } from "react-redux";
import './Profile.css'
const Profile =()=>{
    let [data,setData] = useState({});
    let userdata = useSelector(state=>state)
    let id = userdata.id;
    console.log(userdata)
    useEffect(()=>{

      axios.get(`https://dummyjson.com/users/${id}`)
      .then((response)=> {console.log(response.data)
        setData(response.data)
      })
      .catch(()=> console.log("Error"))
    }
  
,[id])
    
   
    return (
        <div >
            
          {
            data&&
           <div className="profile">

            <div className="img" >
            <img src={data.image} alt="" />
            </div>
            <div className="data">
            <p>id:{data.id}</p>
            <p>userName:{data.username}</p>

            <p>firstName:{data.firstName}</p>
            <p>lastName:{data.lastName}</p>

            <p>Age:{data.age}</p>
            <p>Gender:{data.gender}</p>
            <p>email:{data.email}</p>
            </div>
           </div>
                    
        
          }
        </div>
    )
}
export default Profile;