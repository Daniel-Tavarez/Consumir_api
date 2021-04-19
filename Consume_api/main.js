const realizarPeticion = async() => {
  const res = await fetch('https://localhost:44331/weatherforecast');
  const data = await res.json();
    let element = document.getElementById('elemen')
    element.innerHTML =
    `<strong>Date</strong>
    <p>${data[0].date}</p>
    <strong>Celcius temperature</strong>
    <p>${data[1].temperatureC}</p>
    <strong>Fahrenheit temperature</strong>
    <p>${data[2].temperatureF}</p>
    <strong>Description</strong>
    <p>${data[3].summary}</p>
    `
    ;
  console.log(data);
};
realizarPeticion();
