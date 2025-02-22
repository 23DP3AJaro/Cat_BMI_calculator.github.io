const GOBUTTON = document.getElementById("GoButton");
GOBUTTON.addEventListener("click", function() {
    const MASS = document.getElementById("InputMass").value;
    const LENGTH = document.getElementById("InputLength").value;
    const RESULTFIELD = document.getElementById("ResultField");

    let result = MASS / (LENGTH * LENGTH);

    RESULTFIELD.innerHTML = result;
});

const CATFACT = document.getElementById("CatFactPlaceholder");
fetch('https://catfact.ninja/fact')
    .then(response => response.json())
    .then(data => {
        CATFACT.innerHTML = `${data.fact}`
        console.log("Fetch works")
    })
    .catch(error => console.error('Error:', error));
