function displayType(character) {
    var characterType = character.getAttribute("data-character-type");
    console.log(characterType);
    alert(characterType + " is in the " + character.innerHTML + " universe!");
}