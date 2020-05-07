var firstName = "Devin"
var lastName = "conroy"
var age = "28"
var likesToTravel = true
console.log (firstName,lastName,age,likesToTravel)

// Arrays!!!!!
var chorseList = ["take out trash", "wash clothes", "clean dishes"]


console.log(chorseList)
console.log(chorseList[2])

var movieList = ["Interstellar","The Departed","Shrek"]
console.log(movieList[0])
console.log(movieList[1])
console.log(movieList[2])

// Obects

var Mia = {
    species: "dog",
    likesNoise: true,
    age: "1",
    toyArray: ["alligator","bone", "sheep"],
    
}

var meObject = {
    firstName: "Devin",
    lastName: "Conroy",
    age: 28,
    likesToTravel: true,
    favoriteMovies: ["Interstellar","The Departed","Shrek"]
}
console.log(meObject.firstName)
console.log(meObject.favoriteMovies[1])

// bracket notation

console.log(meObject["favoriteMovies"][0])

// const wardrobe = {
//     height: 80,
//     manufacturer: "Killibrew & Sons",
//     contents: ["Dress shirt", "Jeans", "Suit", "Skirt", "Tennis shoes"],
//     depth: 38,
//     width: 50
// }

// console.log(wardrobe.height,wardrobe.manufacturer,wardrobe.contents,wardrobe.depth,wardrobe.width)

const empireStateBuilding = {
    stories: 103,
    height: 1453,
    address: "350 Fifth Avenue, Manhattan, New York 10118",
    squareFeet: 2768591,
    constructionDate: 1931,
    cost: 40948900,
    owner: "Empire State Realty Trust",
    eastWestLength: 424,
    northSouthLength: 187,
    architect: "Shreve, Lamb & Harmon"
}

console.log(empireStateBuilding.stories,empireStateBuilding.height,empireStateBuilding.squareFeet,empireStateBuilding.eastWestLength,empireStateBuilding.northSouthLength)

console.log(empireStateBuilding["adress"],empireStateBuilding["constructionDate"],empireStateBuilding["cost"],empireStateBuilding["owner"],empireStateBuilding["architect"])


// Lightning exercise 1
var mustang = {
    color: "red",
    year: 2015
}
console.log(mustang.color,mustang.year)

const nashvilleSoftwareSchool = {
    founded: 2012,
    director: "John Wark",
    instructors: {
        fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
        partTime: ["Zoe", "Nathan"]
    },
    address: "500 Interstate Blvd. S"
}
console.log(nashvilleSoftwareSchool.instructors.partTime, nashvilleSoftwareSchool.instructors.fullTime)
console.log(nashvilleSoftwareSchool.instructors.fullTime[4], nashvilleSoftwareSchool.instructors.partTime[0])


const beatles = {
    albums: ["Abbey Road", "Sgt Peppers Lonely Heart's Club Band", "Revolver", "Magical Mystery Tour", "Something New"],
    history: {
        formed: 1960,
        disbanded: 1970
    },
    members: [
        {
            name: "George Harrison",
            birth: 1943,
            death: 2001
        },
        {
            name: "Paul McCartney",
            birth: 1942,
            death: null
        },
        {
            name: "John Lennon",
            birth: 1940,
            death: 1980
        },
        {
            name: "Ringo Starr",
            birth: 1940,
            death: null
        }
    ]
}

// Paul McCartney was in the Beatles from 1960 to 1970. He was born in 1942. He contributed heavily to the Magical Myster Tour Album. `${vggegergerge}

console.log(`${beatles.members[1].name} was in the beatles from 1960 to 1970. He was born in ${beatles.members[1].birth}. He contributed heavily to the ${beatles.albums[3]}`)

