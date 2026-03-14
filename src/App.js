
import React, {useState} from "https://unpkg.com/react@18/umd/react.development.js?module";

import Login from "./screens/Login.js";
import RegisterBot from "./screens/RegisterBot.js";
import Dashboard from "./screens/Dashboard.js";

export default function App(){

 const [screen,setScreen] = useState("login");
 const [user,setUser] = useState(null);

 if(screen==="login"){
  return <Login setScreen={setScreen} setUser={setUser}/>;
 }

 if(screen==="register"){
  return <RegisterBot setScreen={setScreen}/>;
 }

 if(screen==="dashboard"){
  return <Dashboard user={user}/>;
 }

}
