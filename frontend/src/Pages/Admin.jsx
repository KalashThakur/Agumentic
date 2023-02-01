import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import style from "../Styles/Admin.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Admin = () => {
    const navigate = useNavigate()

    const [image, setImage] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
            let payload = {image, content}

            axios.post("http://localhost:8080/user/create", payload)
        .then((res) => {
            console.log("res", res)
            navigate("/")
        })
        .catch((err) => console.log("err", err));
    
    }


  return (
    <div className={style.container}>

<h2>Admin Page</h2>


        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              fullWidth
              id="img"
              label="Image URL"
              name="img"
              autoFocus
            />
            <TextField
              margin="normal"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              fullWidth
              name="content"
              label="content"
              type="text"
              id="content"
            />
           
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Done
            </Button>
            
          </Box>
        
    </div>
  )
}
