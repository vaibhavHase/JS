/*
IIFE - Immediate invoked function Expression
To call the function immediately after defination 
To remove the global varible polution we use IIFE
*/
(function connection()
{
    console.log("DATABASE CONNECTION FORMED")
}
)();  //when we write another IIFE function after another then we have to end it manually using(;)

(
    (database)=>{
        console.log(`CONNECTION FORMED FOR ${database}`)
    }
)("MongoDB")