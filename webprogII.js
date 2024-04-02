function checkSpeed(speed) {
    // TODO: write your code here
    if (speed > 80) {
        console.log("Kecepatan Cepat");
    } 
    else if (speed >= 60 && speed <= 80) {
        console.log("Kecepatan Sedang");
    } 
    else 
        console.log("Kecepatan Lambat");
}

checkSpeed(85); 
checkSpeed(70);
checkSpeed(55);
