// nested functions
function one(){
    let userName = "vaibhav"

    function two(){
        let website = "google"
        console.log(userName)
    }
    //console.log(website)
    two()
}
one()

//mini hoisting 
console.log(addOne(5))
function addOne(n){
    return(n+1)
}

/* here we can't call below function upper one because it is define like function expession where 
function is assigned to a variable 
*/
const addTwo = function(n)
{
    return(n+2)
}
console.log(addTwo(5))