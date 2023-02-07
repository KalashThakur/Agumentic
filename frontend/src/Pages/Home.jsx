import React, { useEffect, useState } from 'react'
import style from "../Styles/Home.module.css";
import { FaEdit} from "react-icons/fa";
import axios from "axios";

export const Home = () => {
    let [userData, setUserData] = useState([]);

  useEffect(() => {
     getData();
  }, [])

  let getData = async () => {
    let res = await fetch('https://agumentic.onrender.com/user');
    let data = await res.json();
    console.log('data:', data)
    setUserData(data)
  }
  // https://agumentic.onrender.com/user/
  let handleDelete = (id) => {
     axios.delete(`https://agumentic.onrender.com/user/${id}`)
     .then((res) => console.log(res.data))
     .catch((err) => console.log(err))
  }

  let handleEdit = () => {
    
  }

  return (
    <div>

<div className={style.container}>
  {userData.map((item) => {
    return (
      <div key={item._id} className={style.container2}>

        <div className={style.topContainer}>
          <div>
              <h2>Travelling Agency Landing Page</h2>
          </div>

          <div className={style.buttons}>
            {/* <div onClick={handleEdit}>Edit</div> */}
            <div onClick={() => handleDelete(item._id)}>Delete</div>
          </div>
        </div>
        
          <div>
            {" "}
            {/* <FaEdit /> */}
            <img src={item.image} alt={`image`} />{" "}
          </div>
          <div className={style.contentDiv}>
           <h1><strong>Hi there! 🤘🏻</strong></h1>
           <p>{item.content}</p>
          </div>
          
      </div>
    );
  })}

</div>
    </div>
  )
}
