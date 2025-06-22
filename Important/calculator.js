    function calculateSupply(age, amountPerDay) {
    const maxAge = 90;
    const yearsLeft = maxAge - age;
    const daysInYear = 365;


    const totalNeeded = Math.round(yearsLeft * daysInYear * amountPerDay);

    console.log(`You will need ${totalNeeded} to last you until the ripe old age of ${maxAge}`);
    }


    calculateSupply(25, 2.5);
    calculateSupply(40, 1.2);
    calculateSupply(70, 3.7);
