let libButton = document.getElementById('lib-button');
let storyDiv = document.getElementById('story');
let noun = document.getElementById('noun');
let adjective = document.getElementById('adjective');
let person = document.getElementById('person');

libButton.addEventListener('click', function() {
    storyDiv.innerText = "La " + noun.value + " est " + adjective.value + " dans un " + person.value + ".";
})








