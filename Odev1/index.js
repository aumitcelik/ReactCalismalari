import getData from "./app.js";
getData(1)
.then((data) =>{
    console.log(data)
}).catch((error) => {
    console.log(error)
});