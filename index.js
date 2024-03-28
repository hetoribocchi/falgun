// alert (" wellcome to the website")
greetings = "Namaste"
console.log(greetings, "costomer")
console.log(greetings, "RAm")
console.log(greetings, "suta")
console.log(greetings, "Hari")

let branch
branch = "Chabahil";
console.log(branch)

const HEAD_OFFICE = ["PUTALISADAK"]
console.log("HEAD_OFFICE")
let subject
console.log(subject)


let courses = ["Pyton", "Java", " HTML", "AI"]
courses[3] = "Artificial Intelligence"
console.log(courses)

let company = {
    Brand: "Willow",
    Url: " willowfriend.com",
    estd: "2002",
}

let projector = {
    Brand: "Sonye",
    Price: "40000",
    Stock: "400",
    Resolution: "1200x720",
}
console.log(company)
console.log(projector)

let course = "web"
course = {
    Title: "web",
    duration: "3",
    durationUnit: "month",
    StartTime: "3",
    endTime: "4",
}
console.log(course)
course.endTime = 5
console.log(course)

let feildToBeChange = "endTime"
console.log("end-time", course[feildToBeChange])

let user = {
    Name: "Ram",
    Adress: " Makalbari",
    Numbers: [{
        number: 98000000,
        provider: "ntc",
    }, {
        number: 97000000,
        provider: "ncell",

    }, {
        number: 1597088,
        provider: "landine"

    }],
    TemporaryAdress: {
        City: "bhaktapur",
        Ward: "07",
        District: "kathmandu",
    },
    DateOfBirth: " 2002 ",
}
console.log(user)

let brands = [{
    name: "samsung",
    website: "samsung.com",
    products: ["Phone", "monitor", "washingMachine"]

}, {
    name: "apple",
    Website: "apple.com",
    products: ["Phone", "laptop", "tablet"]
}

]
console.log(brands)

brands[0].products[0] = "plane"

console.log(brands)

let companeys = [{
    name: "motorola",
    founders: [{ name: "wrong-ceo", phone: 111 },],

},
{
    name: "Bannana",
    fonders: [
        { name: "abc", phone: 2222 },
        { name: "xcxcv", phome: 2555 },
    ],
},
]
console.log(companeys)

companeys[0].founders[0].name = "ram"
console.log(companeys)
companeys[0].founders[0].adress = "korea"
console.log(companeys)

let person1 = {
    name: "Ram",
    age: 10,
}
let person2 = person1
person2.name = "shyam"
console.log(person1)

let productApiData = {
    prodducts: [
        { name: "watch", price: 1000 },
        { name: "mouse", price: 1000 },
        { name: "cover", price: 100 },
        { name: "mobile", rate: 10000 },

    ]
}
productApiData.prodducts[3].price = productApiData.prodducts[3].rate
delete productApiData.prodducts[3].rate
console.log(productApiData)

console.log("10 + 10=", 20)

console.log("200+200=", 400)
let firstInput = 100
let secondInput = 200
let sum = firstInput + secondInput

console.log(firstInput + " + " + secondInput + " = ", sum)
console.log(`${firstInput} + ${secondInput} = ${sum}`)


// console.log(`${todos[0].title} is ${todos[0].status}`)
// console.log(`${todos[1].title} is ${todos[1].status}`)
// console.log(`${todos[2].title} is ${todos[2].status}`)
// console.log(`${todos[3].title} is ${todos[3].status}`)

// function printStatus(index) {
//     console.log(`${todos[index].title} is ${todos[index].status}`)
// }
// printStatus(0)
// printStatus(1)
// printStatus(2)
// printStatus(3)

// function printStatus(opj) {
//     console.log(`${opj.title} is ${opj.status}`)
// }

// printStatus(todos[0])
// printStatus(todos[1])
// printStatus(todos[2])
// printStatus(todos[3])
// printStatus(todos[4])



let cart= [200, 300, 400,]

// function calculateCartPrice(num1) {
//     return (`${num1[0]} + ${num1[1]} + ${num1[3]}`);
// }
function calculateCartPrice(num1) {
    return (num1[0] + num1[1] + num1[2]); 
}
cart[3] = 500
console.log(calculateCartPrice(cart));

const triple = (input) =>  {
    return input * 3
}
console.log(triple(300))

const diff = (firstInput, secondInput) => firstInput - secondInput

console.log(diff(9000, 400));

let peoples = ["ram", "hari", "shyam", "sita"]
console.log(peoples[0]);
console.log(peoples[2]);
console.log(peoples[3]);
console.log(peoples[4]);

let willRain = false
let hasProbabilty = false
if (willRain) {
    console.log("take umbrella");
} else {
    if (hasProbabilty) {
        console.log("you may need it");
    } else {
        console.log("no need");
    }
    
}
let todos = [
    {
        title: "html",
        status: false
    },
    {
        title: "css",
        status: true
    },
    {
        title: "css",
        status: true
    }, {
        title: "js",
        status: false
    }, {
        title: "react",
        status: false

    },]



    
function checkstatus (input) {
    if (input.status) {
        console.log("completed");
    } else {
        console.log("pending");
    }
}
checkstatus(todos[0])
checkstatus(todos[1])
checkstatus(todos[2])
checkstatus(todos[3])

