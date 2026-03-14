
import React from "https://unpkg.com/react@18/umd/react.development.js?module";

export default function Profile({user}){

return(

<div className="space-y-4">

<h2 className="font-bold text-lg">Perfil</h2>

<div className="bg-[#14141C] p-4 rounded-xl">

<p>Nombre: {user?.nombre}</p>
<p>Teléfono: {user?.phone}</p>
<p>Correo: {user?.email}</p>

</div>

<div className="bg-[#14141C] p-4 rounded-xl">
⚙️ Ajustes
</div>

<div className="bg-[#14141C] p-4 rounded-xl">
📋 Términos y condiciones
</div>

<div className="bg-[#14141C] p-4 rounded-xl">
🎧 Soporte
</div>

<button className="w-full bg-red-600 p-3 rounded-xl">
Cerrar sesión
</button>

</div>

);

}
