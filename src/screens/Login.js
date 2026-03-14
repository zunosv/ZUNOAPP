
import React, {useState} from "https://unpkg.com/react@18/umd/react.development.js?module";
import {db} from "../firebase.js";
import {collection,query,where,getDocs} 
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

export default function Login({setScreen,setUser}){

const [phone,setPhone]=useState("");
const [password,setPassword]=useState("");

async function login(){

 const q=query(
  collection(db,"users"),
  where("phone","==",phone),
  where("password","==",password)
 );

 const snap=await getDocs(q);

 if(snap.empty){
  alert("Usuario no encontrado");
  return;
 }

 const doc=snap.docs[0];

 setUser({id:doc.id,...doc.data()});

 setScreen("dashboard");
}

return(

<div className="flex items-center justify-center min-h-screen">

<div className="bg-[#14141C] p-8 rounded-xl w-80 space-y-3">

<h2 className="text-xl font-bold text-center">Login</h2>

<input
placeholder="Teléfono"
value={phone}
onChange={e=>setPhone(e.target.value)}
className="w-full p-3 rounded bg-[#1a1a2e]"/>

<input
type="password"
placeholder="Contraseña"
value={password}
onChange={e=>setPassword(e.target.value)}
className="w-full p-3 rounded bg-[#1a1a2e]"/>

<button
onClick={login}
className="w-full bg-red-600 p-3 rounded-xl">
Entrar
</button>

<p
onClick={()=>setScreen("register")}
className="text-center text-gray-400 cursor-pointer">
Crear cuenta
</p>

</div>
</div>
);

}
