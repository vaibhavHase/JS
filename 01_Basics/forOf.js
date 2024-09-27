const numbers = [1,2,3,4,5]

for (const num of numbers) {
    //console.log(num);
}

const greetings = "Hello Vaibhav"

for (const greet of greetings) {
    //console.log(greet)
}

const contries = new Map()
contries.set('in','India')
contries.set('chn','China')
contries.set('USA','United states of America')

for (const [key,val] of contries) //this is called as object destructuring
     {
      console.log(key+" -> "+val)
    }

// const obj ={
    // In: "India",
    // chn: "China",
//}

// for (const val of obj) {
//     //console.log(val)    
// }

//output->TypeError: obj is not iterable