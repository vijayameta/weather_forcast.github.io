const API_Key = `DJehIGZiAZIinjnQGGaUEROG5Oqmd0ii`
// const form = document.querySelector("form");
// const search = document.querySelector("#search");
// const search = document.querySelector("#search");
// const weather = document.querySelector(".box1");
// const humidity = document.querySelector(".humidity");
// const pressure = document.querySelector(".pressure");

//gettingweatherdetails
const getweather = async(city)=>{
    const url = "http://dataservice.accuweather.com/currentconditions/v1/"
    const query = `$(city)?(apikey)=$(key)`;

    const response = await fetch(url + query);
    const data = await response.json();
    
    return data[0];
}

const getcity = await(city)=>{
    const url = "http://dataservice.accuweather.com/locations/v1/cities/search"
    const query = `?(apikey)=$(key)&q=$(city)`;
    const response = await fetch(url + query);
    const data = await response.json();
}

// form.addEventListener(
//     "submit",
//     function(event) {
//         getweather(search.value)
//         event.preventDefault();
        
//     }
// )