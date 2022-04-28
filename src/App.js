import { useState, useEffect, useRef } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import "./App.css";


function App() {
    const [cart, setCart] = useState([]);
    const [menuItems, setMenuItems] = useState([]);
    const roolElRef = useRef(null);
    const addToCart = (menuItem) => {

setCart((oldCart) => {

    return [...oldCart, menuItem];

});

};

// AI button
useEffect(() => {

    if (!window.alanBtnInstance) {

window.alanBtnInstance = alanBtn({

key: "35f6b5da65e1e9d1272a969c7eca83452e956eca572e1d8b807a3e2338fdd0dc/stage",

onCommand: (commandData) => {

console.log("commandData.command ", commandData.command);

if (commandData.command === "getMenu") {

// Call the client code that will react to the received command

setMenuItems(commandData.data);

}

},

});

}

console.log("a------------>");

}, []);

return (

<div className="App">

<div ref={roolElRef} id="btn"></div>{" "}

{menuItems.map((menuItem) => (

<li key={menuItem.name}>

{" "}

{menuItem.name} - $ {menuItem.price} - {menuItem.category}{" "}

<button onClick={() => addToCart(menuItem)}> add to cart </button>{" "}

</li>

))}

<div>

<h2> Cart </h2>{" "}

</div>

{cart.map((cartItem) => (

<li key={cartItem.name}>

{" "}

{cartItem.name} - {cartItem.price} - {cartItem.category}{" "}

</li>

))}{" "}

</div>

);

}


export default App;
