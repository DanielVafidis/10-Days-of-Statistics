function processData(input) {

    // split the input to get an array of numbers
    let splitn = input.split('\n')[1].split(' ').map(Number);
    // find mean
    let mean = splitn.reduce((a, b) => a + b) / splitn.length;

    // find median Even : Odd
    splitn.sort((a, b) => a - b);
    let median = (splitn.length % 2 === 0) ? (splitn[splitn.length / 2] + splitn[(splitn.length / 2) - 1]) / 2 : splitn[(splitn.length - 1) / 2];

    // create an object and calculate each frequency
    let obj = {}
    splitn.map(el => obj[el] = obj[el] ? obj[el] + 1 : 1);

    // add value/freq pairs into an array to be able to filter data 
    let arr = []
    Object.keys(obj).map(el => arr.push({ val: +el, freq: obj[el] }));

    // find Mode
    let max = Math.max(...Object.values(obj)); // Mode is max frequency
    let mode = arr.filter(el => el.freq === max); // filter all the max frequency items in the array

    // log result
    console.log(mean.toFixed(1));
    console.log(parseFloat(median).toFixed(1));
    console.log((mode.length > 1) ? mode[0].val : max);
}