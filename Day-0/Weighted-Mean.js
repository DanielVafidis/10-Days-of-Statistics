function processData(input) {
    //Enter your code here

    // split the input to get arrays of numbers and weights
    let numbers = input.split('\n')[1].split(' ').map(Number);
    let weight = input.split('\n')[2].split(' ').map(Number);

    // init variables
    let sum = 0;
    let totalWeight = 0;

    // for each number, add the number multiplied by the weight
    for (let i = 0; i < numbers.length; i++) {
        sum += weight[i] * numbers[i];
        totalWeight += weight[i];
    }

    // show result
    console.log(sum / totalWeight);
}