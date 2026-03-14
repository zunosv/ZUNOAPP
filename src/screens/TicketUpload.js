
import React,{useState} from "https://unpkg.com/react@18/umd/react.development.js?module";
import {db} from "../firebase.js";

import {collection,addDoc}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

export default function TicketUpload({user}){

const [monto,setMonto]=useState("");

async function send(){

await addDoc(collection(db,"tickets"),{

userId:user.id,
userName:user.nombre,
monto:parseFloat(monto),
status:"pending",
createdAt:Date.now()

});

alert("Ticket enviado");

}

return(

<div className="space-y-4">

<input
placeholder="Monto"
value={monto}
onChange={e=>setMonto(e.target.value)}
className="w-full p-3 rounded bg-[#1a1a2e]"/>

<button
onClick={send}
className="w-full bg-red-600 p-3 rounded-xl">
Enviar ticket
</button>

</div>

);

}
