function processData(input) {
    //Enter your code here

    // split the input to get arrays of numbers and weights
    let numbers = input.split('\n')[1].split(' ').map(Number);
    let weight = input.split('\n')[2].split(' ').map(Number);

    //
    let sum = 0;
    let totalWeight = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += weight[i] * numbers[i];
        totalWeight += weight[i];
    }

    console.log(sum / totalWeight);
}