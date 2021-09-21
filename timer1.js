
let avg = process.argv.slice(2);
const peep = (avg)=> {
  let sortAvg = avg.sort();
  for (let b of sortAvg) {
    setTimeout(()=>{
      process.stdout.write(`${b}\x07\n`);
    },b * 1000);
  }
};
peep(avg);
  

