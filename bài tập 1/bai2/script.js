function temperatureConverter(valNum) {
    let valNum = parseFloat(valNum);
    document.getElementById("outputCelcius").innerHTML = (valNum - 32) / 1.8;
}