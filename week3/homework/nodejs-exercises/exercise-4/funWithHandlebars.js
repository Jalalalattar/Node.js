'use strict';

const handlebarPackage = require('handlebars');

const subjects = ["shark", "popcorn", "poison", "fork", "cherry", "toothbrush", "cannon"];
const punchlines = ["watch movie with", "spread some love", "put on cake", "clean toilets", "go to the moon", "achieve world piece", "help people learn programing"];

const randomArrays = {
    subject: subjects[Math.floor(Math.random() * subjects.length)],
    punchline: punchlines[Math.floor(Math.random() * punchlines.length)]
};

const source = '{{subject}} is great to {{punchline}}'
const template = handlebarPackage.compile(source);
const randomJokes = template(randomArrays);
console.log(randomJokes) 