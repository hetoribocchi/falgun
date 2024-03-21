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
    products: ["Phone", "monitor","washingMachine"]
    
}, {
    name: "apple",
    Website: "apple.com",
    products: ["Phone", "laptop","tablet"]
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
            {name: "xcxcv", phome: 2555},
        ],
    },
]
console.log(companeys)

companeys[0].founders[0].name = "ram"
console.log(companeys)
companeys[0].founders[0].adress =   "korea"
console.log(companeys)

let person1 = {
    name: "Ram",
    age: 10,
}
let person2 = person1
person2.name = "shyam"
 console.log (person1)