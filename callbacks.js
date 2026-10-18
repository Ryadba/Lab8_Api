let animals = ['Giraffe', 'Elephant', 'Yak']

animals.forEach(function (animal, Index) {
    console.log(animal, Index)
})


// Arrow functions 1
animals.forEach( (animal, Index) =>{
    console.log(animal, Index)
})

// Arrow functions examples

animals.forEach( function(animal) {
    console.log(animal)
})
animals.forEach( (animal) =>{
    console.log(animal)
})
animals.forEach( animal => console.log(animal))
