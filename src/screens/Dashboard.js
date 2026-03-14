
import React,{useState} from "https://unpkg.com/react@18/umd/react.development.js?module";

import Tickets from "./Tickets.js";
import TicketUpload from "./TicketUpload.js";
import Profile from "./Profile.js";

export default function Dashboard({user}){

const [tab,setTab]=useState("home");

return(

<div className="pb-24">

<header className="p-4 border-b border-gray-800">

<h2 className="text-lg font-bold">
Hola {user?.nombre}
</h2>

</header>

<div className="p-6">

{tab==="home" && (

<div className="bg-gradient-to-r from-red-600 to-red-500 p-6 rounded-2xl">

<p>Saldo disponible</p>

<h2 className="text-3xl font-bold">
${user?.balance || 0}
</h2>

</div>

)}

{tab==="tickets" && <Tickets user={user}/>}

{tab==="upload" && <TicketUpload user={user}/>}

{tab==="profile" && <Profile user={user}/>}

</div>

<nav className="fixed bottom-0 w-full bg-black border-t border-gray-800 flex justify-around py-3">

<button onClick={()=>setTab("home")}>Inicio</button>

<button onClick={()=>setTab("tickets")}>Movimientos</button>

<button onClick={()=>setTab("upload")}>QR / Ticket</button>

<button onClick={()=>setTab("profile")}>Perfil</button>

</nav>

</div>

);

}
