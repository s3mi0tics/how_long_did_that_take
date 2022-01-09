const start = performance.now();
const story =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";

const reversed1 = story.split("").reverse().join("");

console.log(reversed1);

console.log(`reversed1 took ${performance.now() - start} milliseconds to run`);

const start2 = performance.now();

function reversed2(str) {
  let revString = "";

  for (i = str.length - 1; i >= 0; i--) {
    revString += str[i];
  }

  return revString;
}

console.log(reversed2(story))

console.log(`reversed2 took ${performance.now() - start2} milliseconds to run`);


const start3 = performance.now();

function reversed3(str)
{
    let n = str.length;

    // Swap character starting from two
    // corners
    for (let i = 0; i < parseInt(n / 2, 10); i++)
        str = swap(str,i,n - i - 1);
    return str;
}
 
function swap(str, i, j)
{
    let ch = str.split('');
    let temp = ch[i];
    ch[i] = ch[j];
    ch[j] = temp;
    return ch.join("");
}

console.log(reversed3(story))

console.log(`reversed3 took ${performance.now() - start3} milliseconds to run`);