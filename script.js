function calculateBMI() {
    //Get the height and height of a person in inches and weight in lbs from the textarea inputs from the html.
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;

    //Convert height from inches to meters and weight from lbs to kg.
    let weightInKg = weight / 2.20462;
    let heightInMeters = height / 39.3701;

    //Calculate the bmi when the user clicks the button and display the result in the html page formated to 2 decimal places.
    let bmi = weightInKg / (heightInMeters * heightInMeters);
    bmi = bmi.toFixed(2);

    //Output format: "Weight: {weight} lbs, Height: {height} inches, BMI: {bmi}"
    result.innerHTML = `Weight: ${weight} lbs, Height: ${height} inches, BMI: ${bmi}`;

    //Category of BMI:
    //Underweight: less than 18.5
    //Normal weight: 18.5–24.9
    //Overweight: 25–29.9
    //Obesity: BMI of 30 or greater
    if (bmi < 18.5) {
        result.innerHTML += `<br>Category: Underweight`;
    } else if (bmi >= 18.5 && bmi < 25) {
        result.innerHTML += `<br>Category: Normal weight`;
    } else if (bmi >= 25 && bmi < 30) {
        result.innerHTML += `<br>Category: Overweight`;
    } else if (bmi >= 30) {
        result.innerHTML += `<br>Category: Obesity`;
    }
}