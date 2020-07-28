/*
each letter delay its appearance by 100ms (or so) longer than the previous letter.
*/

const sentence = "hello there from lighthouse labs";
let delay = 1000
for (const char of sentence) {
  delay +=100;
  setTimeout(() => {
    process.stdout.write(char);
  }, delay)
}

setTimeout(() => {
  console.log('');;
}, delay + 100) 
