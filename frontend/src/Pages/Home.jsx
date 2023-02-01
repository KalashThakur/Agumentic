import React, { useEffect, useState } from 'react'
import style from "../Styles/Home.module.css";

export const Home = () => {
    let [userData, setUserData] = useState([]);

  useEffect(() => {
     getData();
  }, [])

  let getData = async () => {
    let res = await fetch('http://localhost:8080/user');
    let data = await res.json();
    console.log('data:', data)
    setUserData(data)
  }

  return (
    <div>
        <h2>Travelling Agency Landing Page</h2>

<div className={style.container}>
  {userData.map((item) => {
    return (
      <div key={item._id}>
        
          <div>
            {" "}
            <img src={item.image} alt={`image`} />{" "}
          </div>
          <div>
          <h1><strong>Hi there! 🤘🏻</strong></h1>
          </div>
          <div>
            {" "}
            <p>{item.content}</p>
          </div>

          <div>
            {/* <button
              className={style.button}
              onClick={() => handlDelete(item)}
            >
              Delete
            </button>{" "} */}
          </div>
          
      </div>
    );
  })}

</div>
    </div>
  )
}
