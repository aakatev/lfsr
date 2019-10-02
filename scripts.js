let pArray = [0, 1, 0];
let sArray = [1, 0, 0];

function tick(p, s) {
  let f = feedback(p, s);
  s.unshift(f);
  let output = s.pop();
  console.log(`sArray: ${s}`);
  console.log(`output: ${output}`);
  return s;
}

function feedback(p, s) {
  let result = 0;
  for (let i=0; i<p.length; i++) {
    result += (p[i]*s[i])%2
  }
  return result%2;
}

async function run() {
  for(let i=0; i< (Math.pow(2, pArray.length)-1); i++) {
    sArray = tick(pArray, sArray);
  }
}

run();





// let pArray = [0, 1, 0];
// let sArray = [1, 0, 0];

// function tick(p, s) {
//   let f = feedback(p, s);
//   s.unshift(f);
//   let output = s.pop();
//   console.log(`sArray: ${s}`);
//   console.log(`output: ${output}`);
//   return s;
// }

// function feedback(p, s) {
//   let result = 0;
//   for (let i=0; i<p.length; i++) {
//     result += (p[i]*s[i])%2
//   }
//   return result%2;
// }

// async function run() {
//   for(let i=0; i< (Math.pow(2, pArray.length)-1); i++) {
//     sArray = tick(pArray, sArray);
//   }
// }

// run();