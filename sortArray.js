function sortArray() {
    const numbersInput = prompt("Enter numbers (e.g., 24, 65, 21, 5, 9, 32, 42, 80, 57)");
    const namesInput = prompt("Enter names (e.g., Zenvo, Erica, Jordie, Alicia, Redon)");

    const numbers = numbersInput ? numbersInput.split(",").map(Number) : [];
    const names = namesInput ? namesInput.split(",") : [];

    const mergedArray = numbers.concat(names);
    alert("Merged Array: " + mergedArray.join(", ")); 

    const sortedNumbers = [...numbers].sort((a, b) => b - a);
    alert("Numbers sorted in reverse: " + sortedNumbers.join(", ")); 

    const sortedNames = [...names].sort();
    alert("Names sorted alphabetically: " + sortedNames.join(", ")); 
}

sortArray();