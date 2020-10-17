const axios = require('axios');

getData();

// async function getData(){
//     const dataUrl = "https://www.omdbapi.com/?t=The%20Matrix&apikey=trilogy";

//     const res = await axios.get(dataUrl);
//     console.log(res.data);
// }

function getData() {
    const dataUrl = "https://www.omdbapi.com/?t=The%20Matrix&apikey=trilogy";

    axios.get(dataUrl).then((res, req) => {
        console.log(res.data);
    });
}