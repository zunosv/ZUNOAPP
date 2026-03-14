
import React,{useEffect,useState} from "https://unpkg.com/react@18/umd/react.development.js?module";
import {db} from "../firebase.js";

import {collection,query,where,getDocs}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

export default function Tickets({user}){

const [tickets,setTickets]=useState([]);

useEffect(()=>{

async function load(){

const q=query(
collection(db,"tickets"),
where("userId","==",user.id)
);

const snap=await getDocs(q);

const list=snap.docs.map(d=>({id:d.id,...d.data()}));

setTickets(list);

}

load();

},[]);

return(

<div className="space-y-4">

<h2 className="font-semibold">Mis Tickets</h2>

{tickets.length===0 && (

<p className="text-gray-400 text-sm">
Aún no tienes tickets
</p>

)}

{tickets.map(t=>(

<div key={t.id}
className="bg-[#14141C] p-4 rounded-xl">

<p>${t.monto}</p>
<p className="text-sm text-gray-400">
{t.status}
</p>

</div>

))}

</div>

);

}
