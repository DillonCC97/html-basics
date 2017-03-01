function script() {
    console.log("Test success");
    var book1 = {
        title: "White Noise",
        author: "Don Delillo",
        publish_country: "The United States",
        language: "English",
        publisher: "Viking Adult",
        year: 1985,
        pages: 326
    };

    var book2 = {
        title: "Gravity's Rainbow",
        author: "Thomas Pynchon",
        publish_country: "The United States",
        language: "English",
        publisher: "Viking Press",
        year: 1973,
        pages: 760
    };

    var book3 = {
        title: "Infinite Jest",
        author: "David Foster Wallace",
        publish_country: "The United States",
        language: "English",
        publisher: "Little",
        year: 1996,
        pages: 1079
    };

    var collection = "";
    var collection_arr = [book1, book2, book3];

    for (var i = 0; i<collection_arr.length;i++){
        collection += ("<br><br><br>The book " + collection_arr[i].title + " was written by " + collection_arr[i].author + " and published by " + collection_arr[i].publisher + " in " + collection_arr[i].publish_country + " in " + collection_arr[i].language + " in the year " + collection_arr[i].year);
    }
    document.getElementById("collection").innerHTML = collection;


}


function wizard(name_arg, level_arg, type_arg){
    this.name = name_arg;
    this.level = level_arg;
    this.type = type_arg;

    this.castSpell = function(spell) {
        if(this.type == spell.type && this.level >= spell.level) {
            console.log(this.name +" casts " + spell.name + " successfully!\n" + spell.effect)
        } else if(this.type != spell.type) {
            console.log(this.name + " attempts to cast " + spell.name + " but the spell fizzles out since " + this.name + " is a " + this.type + " wizard, and " + spell.name + " is a " + spell.type + " spell!")
        } else if(this.level < spell.level) {
            console.log(this.name + " attempts to cast " + spell.name + " but the spell fizzles out since " + this.name + " is only level " + this.level + ", and " + spell.name + " is a level " + spell.level + " spell!")
        }
    }

    this.changeOfHeart = function() {
        if(this.type == "dark") {
            this.type = "light";
        } else if (this.type == "light") {
            this.type = "dark";
        }
    }
}

function spell(name_arg, level_arg, type_arg, effect_arg) {
    this.name = name_arg;
    this.level = level_arg;
    this.type = type_arg;
    this.effect = effect_arg;
}

//TESTING
var voldemort = new wizard("Voldemort", 95, "dark");
var dumbledore = new wizard("Dumbledore", 99, "light");
var malfoy = new wizard("Malfoy", 23, "dark");
var neville = new wizard("Neville", 17, "light");
var harry = new wizard("Harry", 27, "light");

//MAKE Ronald Weasley

var avada_kadavra = new spell("Avada Kadavra", 80, "dark", "A flash of green light erupts from their wand, the victim dies instantly!");
var expelliarmus = new spell("Expelliarmus", 25, "light", "The opponents wand flies out of their hand!");
var reducto = new spell("Reducto", 25, "dark", "A loud burst erupts from the users wand and obliterates the obstacle in their way!");

//MAKE strong light spell
//MAKE spell Neville can use

//voldemort.castSpell(avada_kadavra);
//dumbledore.castSpell(avada_kadavra);
//malfoy.castSpell(avada_kadavra);
//neville.castSpell(avada_kadavra);
//harry.castSpell(avada_kadavra);
