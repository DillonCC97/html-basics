/*jslint white: true, browser: true, devel: true, windows: true, forin: true, vars: true, nomen: true, plusplus: true, bitwise: true, regexp: true, sloppy: true, indent: 4, maxerr: 50 */

// DEMO //
//RUN showBookColl();
//MAKE Ronald Weasley (name_arg, level_arg, type_arg)
//MAKE Expecto Patronum (name_arg, level_arg, type_arg, effect_arg, acc_arg, pow_arg, hel_arg)
//RUN Write Harry Potter
//MAKE spell Neville can use
//Play Around

function showBookColl() {
    var book1 = { //Books do not have Object Type
        //PROPERTIES
        title: "White Noise",
        author: "Don Delillo",
        publish_country: "The United States",
        language: "English",
        publisher: "Viking Adult",
        year: 1985,
        pages: 326
    };

    var book2 = { //Have to rewrite everything to create a new Object
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
        collection += ("The book " + collection_arr[i].title + " was written by " + collection_arr[i].author + " and published by " + collection_arr[i].publisher + " in " + collection_arr[i].publish_country + " in " + collection_arr[i].language + " in the year " + collection_arr[i].year + "<br><br><br>");
    }
    document.getElementById("collection").innerHTML = collection;
}

function hideBookColl() {
    document.getElementById("collection").innerHTML = "";
}

/*///////////////////////////////////////////////////////////////////////////////////*/
/*\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\*/

//WIZARD CONSTRUCTOR
function wizard(name_arg, level_arg, type_arg){
    //PROPERTIES
    this.name = name_arg;
    this.level = level_arg;
    this.type = type_arg;
    this.health = level_arg + 50; //Calculated Property
    this.maxHealth = this.health;

    //FUNCTIONS
    this.checkLife = function() { //Checks if wizard is dead, if not displays their health
        if(this.health <= 0) {
            this.health = 0;
            console.log(this.name + " is Dead!");
        } else if(this.health > this.maxHealth) {
            this.health = this.maxHealth;
            console.log(this.name + " has " + this.health + " health.");
        } else {
            console.log(this.name + " has " + this.health + " health.");
        }
    }

    this.takeDamage = function(damage) { //Deals damage to wizard equal to input
        this.health -= damage;
        console.log(this.name + " takes " + damage + " damage!");
        this.checkLife();
        this.updateHealth();
    }

    this.heal = function(heal_arg) { //Heals wizard for input
        this.health += heal_arg;
        console.log(this.name + " heals for " + heal_arg + " health!");
        this.checkLife();
        this.updateHealth();
    }

    this.updateHealth = function() { //Updates DOM table of wizards Health
        document.getElementById(this.name + "-health").innerHTML = this.health;
    }

    this.updateType = function() { //Updates DOM table of wizards Health
        document.getElementById(this.name + "-type").innerHTML = this.type;
    }

    this.changeOfHeart = function() {
        if(this.type == "dark") {
            this.type = "light";
        } else if (this.type == "light") {
            this.type = "dark";
        }
        this.updateType();
    }

    this.practiceSpell = function(spell) { //Casts Spell
        if(this.type == spell.type && this.level >= spell.level) {
            console.log(this.name +" casts " + spell.name + " successfully!\n" + spell.effect)
        } else if(this.type != spell.type) {
            console.log(this.name + " attempts to cast " + spell.name + " but the spell fizzles out since " + this.name + " is a " + this.type + " wizard, and " + spell.name + " is a " + spell.type + " spell!")
        } else if(this.level < spell.level) {
            console.log(this.name + " attempts to cast " + spell.name + " but the spell fizzles out since " + this.name + " is only level " + this.level + ", and " + spell.name + " is a level " + spell.level + " spell!")
        }
    }

    this.castSpell = function(spell, wizard) { //Casts Spell on other wizard
        if(this.type == spell.type && this.level >= spell.level) {
            console.log(this.name +" casts " + spell.name + " successfully!\n" + spell.effect)
        } else if(this.type != spell.type) {
            console.log(this.name + " attempts to cast " + spell.name + " but the spell fizzles out since " + this.name + " is a " + this.type + " wizard, and " + spell.name + " is a " + spell.type + " spell!")
        } else if(this.level < spell.level) {
            console.log(this.name + " attempts to cast " + spell.name + " but the spell fizzles out since " + this.name + " is only level " + this.level + ", and " + spell.name + " is a level " + spell.level + " spell!")
        }

        if (spell.accuracy >=  Math.floor((Math.random() * 100) + 1)) {
            console.log("The " + spell.name + " connects with " + wizard.name);
            if(spell.doesDamage) {
                wizard.takeDamage(spell.power);
            } else {
                wizard.heal(spell.power);
            }
        } else {
            console.log("The " + spell.name + " misses " + wizard.name + " and hits the castle walls spectacularly!");
        }
    }

    //COMMANDS Run upon construction
    var y = document.createElement("TR");
    y.setAttribute("id", this.name + "-Tr");
    document.getElementById("wizardTable").appendChild(y);

    var z = document.createElement("TD");
    var t = document.createTextNode(this.name);
    z.appendChild(t);
    document.getElementById(this.name + "-Tr").appendChild(z);

    var z = document.createElement("TD");
    var t = document.createTextNode(this.level);
    z.appendChild(t);
    document.getElementById(this.name + "-Tr").appendChild(z);

    var z = document.createElement("TD");
    var t = document.createTextNode(this.type);
    z.setAttribute("id", this.name + "-type");
    z.appendChild(t);
    document.getElementById(this.name + "-Tr").appendChild(z);

    var z = document.createElement("TD");
    var t = document.createTextNode(this.health);
    z.setAttribute("id", this.name + "-health");
    z.appendChild(t);
    document.getElementById(this.name + "-Tr").appendChild(z);

}

function spell(name_arg, level_arg, type_arg, effect_arg, acc_arg, pow_arg, hel_arg) {
    this.name = name_arg; //String
    this.level = level_arg; //Int
    this.type = type_arg; //String
    this.effect = effect_arg; //String
    this.accuracy = acc_arg; //Int
    this.power = pow_arg; //Int
    this.doesDamage = hel_arg //Boolean

    var y = document.createElement("TR");
    y.setAttribute("id", this.name + "-Tr");
    document.getElementById("spellTable").appendChild(y);

    var z = document.createElement("TD");
    var t = document.createTextNode(this.name);
    z.appendChild(t);
    document.getElementById(this.name + "-Tr").appendChild(z);

    var z = document.createElement("TD");
    var t = document.createTextNode(this.level);
    z.appendChild(t);
    document.getElementById(this.name + "-Tr").appendChild(z);

    var z = document.createElement("TD");
    var t = document.createTextNode(this.type);
    z.appendChild(t);
    document.getElementById(this.name + "-Tr").appendChild(z);

    var z = document.createElement("TD");
    var t = document.createTextNode(this.effect);
    z.appendChild(t);
    document.getElementById(this.name + "-Tr").appendChild(z);

    var z = document.createElement("TD");
    var t = document.createTextNode(this.accuracy);
    z.appendChild(t);
    document.getElementById(this.name + "-Tr").appendChild(z);

    var z = document.createElement("TD");
    var t = document.createTextNode(this.power);
    z.appendChild(t);
    document.getElementById(this.name + "-Tr").appendChild(z);

    var z = document.createElement("TD");
    var t = document.createTextNode(this.doesDamage);
    z.appendChild(t);
    document.getElementById(this.name + "-Tr").appendChild(z);
}

//TESTING
function writeHarryPotter(){
    window.voldemort = new wizard("Voldemort", 95, "dark");
    window.dumbledore = new wizard("Dumbledore", 99, "light");
    window.malfoy = new wizard("Malfoy", 23, "dark");
    window.neville = new wizard("Neville", 17, "light");
    window.harry = new wizard("Harry", 32, "light");

    window.avada_kadavra = new spell("Avada Kadavra", 80, "dark", "A deadly flash of green light erupts forth.", 60, 150, true);
    window.expelliarmus = new spell("Expelliarmus", 25, "light", "A bright flash of red light zaps across the room.", 80, 15, true);
    window.reducto = new spell("Reducto", 25, "dark", "A loud burst blasts out and obliterates any obstacles in the way.", 30, 60, true);
    window.episkey = new spell("Episkey", 20, "light", "An invisible energy wizzes out.", 90, 20, false);
    document.getElementById("potter-btn").style.display = 'none';
}


//voldemort.castSpell(avada_kadavra);
//dumbledore.castSpell(avada_kadavra);
//malfoy.castSpell(avada_kadavra);
//neville.castSpell(avada_kadavra);
//harry.castSpell(avada_kadavra);
