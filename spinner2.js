const spinnerArray = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|']
let count = 50
for(let line of spinnerArray) {
setTimeout(() => {
    process.stdout.write(`\r${line}   `)
   }, count)
   count += 100
}

          
      
   