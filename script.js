let con = document.getElementById("con");
const btn = document.getElementById("button")
const api = "https://dog.ceo/api/breeds/image/random";

function button(){
 fetch(api)
  .then((response) => response.json())
  .then((data) => {
    const formattedData = `
        <img id="name" src="${data.message}" class ="image" " alt="dog"/> <br>
        
        
        
      `;

    con.innerHTML = formattedData;

    console.log(data);
  })
  .catch((error) => {
    console.error('Error fetching data:', error);
  });
}

button()

btn.addEventListener("click", button);