const myObject = {
    css : "cascading style sheet",
    html : "hypertext markup language",
    py :  "python",
    js : "javascript"
}

for (const key in myObject) {
    console.log(`${key} shortcut for language ${myObject[key]}`)
}

const programming = ['javascript','java','python','cpp']

for (const key in programming) {
    console.log(programming[key])
}