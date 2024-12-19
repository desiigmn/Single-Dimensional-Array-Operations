function sortArray() {
    const inputNumbers = prompt("Enter numbers (e.g., 24, 65, 21, 5, 9, 32, 42, 80, 57)");
    const inputNames = prompt("Enter names (e.g., Zenvo, Erica, Jordie, Alicia, Redon)");

    const numbers = inputNumbers ? inputNumbers.split(",").map(Number) : [];
    const names = inputNames ? inputNames.split(",") : [];

    const mergedArray = numbers.concat(names);
    alert("Merged Array: " + mergedArray.join(", ")); 

    const sortedNumbers = [...numbers].sort((a, b) => b - a);
    alert("Numbers sorted in reverse: " + sortedNumbers.join(", ")); 

    const sortedNames = [...names].sort();
    alert("Names sorted alphabetically: " + sortedNames.join(", ")); 
}

sortArray();