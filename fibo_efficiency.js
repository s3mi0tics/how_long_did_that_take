const { performance } = require('perf_hooks');
const start = performance.now();
let fibo = 35
// recursive

function rFib( n ) {
    if ( n < 2 ) {
        return n;
    }
    return rFib( n-1 ) + rFib( n-2 );
}
rFib(fibo);
timeRFib = performance.now() - start;
console.log(`recursion took ${performance.now() - start} milliseconds to run the fibonacci sequence for ${fibo}`);

const start2 = performance.now();

// iterative
function iFib( n ) {
    const vals = [ 0, 1 ];
    while(vals.length-1 < n) {
        let len = vals.length;
        vals.push( vals[len-1] + vals[len-2] );
    }
    return vals[n];
}
iFib(fibo);

timeIFib = performance.now() - start2;
console.log(`iteration took ${performance.now() - start2} milliseconds to run the fibonacci sequence for ${fibo}`);

timeRFib > timeIFib ? console.log(`recursion is faster than iteration by ${timeRFib - timeIFib} milliseconds when finding the fibonacci sequence for ${fibo}`) : console.log(`iteration is faster than recursion by ${timeIFib - timeRFib} milliseconds when finding the fibonacci sequence for ${fibo}`)

