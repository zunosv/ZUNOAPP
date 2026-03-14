
import React,{useState} from "https://unpkg.com/react@18/umd/react.development.js?module";
import {db} from "../firebase.js";
import {collection,addDoc} 
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

export default function RegisterBot({setScreen}){

const questions=[
"¿Cuál es tu nombre completo?",
"Fecha de nacimiento",
"DUI",
"Teléfono",
"Correo",
"Dirección"
];

const fields=["nombre","birth","dui","phone","email","address"];

const [step,setStep]=useState(0);
const [value,setValue]=useState("");
const [data,setData]=useState({});

function next(){

const newData={...data,[fields[step]]:value};

setData(newData);
setValue("");

if(step+1<questions.length){
setStep(step+1);
}else{
save(newData);
}

}

async function save(userData){

await addDoc(collection(db,"users"),{
...userData,
balance:0,
totalCashback:0,
createdAt:Date.now()
});

alert("Registro completado");

setScreen("login");

}

return(

<div className="p-6 space-y-6">

<h2 className="text-xl font-bold">Bot ZUNO</h2>

<p className="text-gray-400">
Paso {step+1} de {questions.length}
</p>

<div className="bg-[#14141C] p-4 rounded-xl">
{questions[step]}
</div>

<input
className="w-full p-3 bg-[#1a1a2e] rounded"
value={value}
onChange={e=>setValue(e.target.value)}
/>

<button
onClick={next}
className="w-full bg-red-600 p-3 rounded-xl">
Continuar
</button>

</div>

);

}
