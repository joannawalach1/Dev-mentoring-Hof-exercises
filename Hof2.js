    function dict() {
    var animals = [
        { name: 'Burek', eyes: 3, type: 'cat' },
        { name: 'Milelon', type: 'cat', eyes: 4 },
        { name: 'Pusia', type: 'cat', eyes: 2 },
        { name: 'Puszek', type: 'dog', eyes: 2 },
        { name: 'Zorka', eyes: 2, type: 'dog' }
    ]

   const dictionaries = animals.filter((animal) => (animal.type).includes("dog"));
   dictionaries.map(animal => {
       console.log(`${animal.name} is a ${animal.type} and has ${animal.eyes} eyes`);
   })
}

dict();