
let avg = process.argv.slice(2);
const peep = (avg)=> {
  let sortAvg = avg.sort();
  for (let b of sortAvg) {
    let num = Number(b);
    if (num > 0 && num !== null) {
      setTimeout(()=>{
        process.stdout.write(`${num} senonds \x07\n`);
      },num * 1000);

    }
  }
};
peep(avg);
  

