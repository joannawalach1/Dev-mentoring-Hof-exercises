function dict() {
    var animals = [
        { name: 'Burek', eyes: 3, type: 'cat' },
        { name: 'Milelon', type: 'cat', eyes: 4 },
        { name: 'Pusia', type: 'cat', eyes: 2 },
        { name: 'Puszek', type: 'dog', eyes: 2 },
        { name: 'Zorka', eyes: 2, type: 'dog' }
    ]

   const dictionaries = animals.filter((animal) => (((animal.type).includes("dog")) || ((animal.type).includes("cat"))));
   const string = dictionaries[0].name + " " + dictionaries[1].name + " " + dictionaries[2].name + " " + dictionaries[3].name + " " + dictionaries[4].name;
   console.log(` ${string} `);

}

dict();