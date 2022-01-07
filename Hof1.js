function sentencesAboutAnimals(animals) {
    var animals = [
        { name: 'Burek', eyes: 3, type: 'cat' },
        { name: 'Milelon', type: 'cat', eyes: 4 },
        { name: 'Pusia', type: 'cat', eyes: 2 },
        { name: 'Puszek', type: 'dog', eyes: 2 },
        { name: 'Zorka', eyes: 2, type: 'dog' }
    ];

    return animals.map(animal => {
        console.log(`${animal.name} is a ${animal.type} and has ${animal.eyes} eyes`);
    })
}


