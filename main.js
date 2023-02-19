const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

const apiKey = "QuXjkKbfgxxeiGNEz/o+ag==SQImuCNhQvsBmg4s";
const apiUrl = "https://api.api-ninjas.com/v1/dadjokes?limit=1";


const options = {
    method: "GET",
    headers: {
        "X-Api-Key":apiKey
    }
};


 const getJokes = async () =>{

    try {
        jokeEl.innerText = "updating...";
        btnEl.disabled = true;
        btnEl.innerText = "Loading...";
    
        const response = await fetch(apiUrl, options)
        const data = await response.json();
        
        if(jokeEl.classList.contains("errorTx")){
            jokeEl.classList.remove("errorTx");
        }
        btnEl.disabled = false;
        btnEl.innerText = "Tell me a joke";
    
        jokeEl.innerText = data[0].joke
    }catch(error){
        jokeEl.innerText = "An Error happend, try again later"
        btnEl.disabled = false;
        btnEl.innerText = "Tell me a joke";
        jokeEl.classList.add("errorTx");
        console.log(error);
    }    
}
btnEl.addEventListener("click", getJokes);
