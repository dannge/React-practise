import React, {useState, useEffect } from 'react'
import axios from "axios";
import Card from "./Cards";


function Data() {
    const [users, setUsers]=useState([]);
    useEffect(() =>{
        axios
        .get ("http://api.github.com/users")
        .then ((res) =>{
            console.log(res);
            setUsers (res.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);

    const usersData = users.map((data) =>{
        return (
    <Card
    key={data.id}
    id={data.id}
    login={data.login}
    nodeID={data.node_id}
    avatarUrl={data.avatar_url}
    url={data.url}
   />
    );
    });
    
  return <>{usersData}</>;
}

export default Data;