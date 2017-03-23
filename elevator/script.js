var floorQueue = [];
var calls = 0;

function elevator(min_arg, max_arg) {
    this.maxFloor = max_arg;
    this.minFloor = min_arg;
    this.currentFloor = 1;
    this.stops = [];
    this.goingUp = true;

    this.nextFloor = function () {
        var next = null;
        var goUp = false;
        var goDown = false;
        if(this.stops.length > 0){
            for (var i = 0; i < this.stops.length; i++) {
                if (this.goingUp) {
                    if (this.stops[i] > this.currentFloor) {
                        var goUp = true;
                    }
                }
                if (!this.goingUp) {
                    if (this.stops[i] < this.currentFloor) {
                        var goDown = true;
                    }
                }
                if (goUp) {
                    console.log("Going Up!");
                    this.elevate();
                }
                if (goDown) {
                    console.log("Going Down!");
                    this.descend();
                }
            }
        } else {console.log("No stops requested")}
    }

    this.checkFloor = function() {
        for (var i = 0; i < this.stops.length; i++) {
            if (this.currentFloor === this.stops[i]) {
                console.log("Doors Open on Floor: " + this.currentFloor);
                this.stops.splice(i, 1);
                return(false);
            }
        }
        return(true);
    }

    this.elevate = function() {
        var cont = true;
        while(cont){
            this.currentFloor++;
            cont = this.checkFloor();
        }
    }

    this.descend = function() {
        var cont = true;
        while(cont){
            this.currentFloor--;
            cont = this.checkFloor();
        }
    }

    this.floorRequest = function(req_arg) {
        this.stops.push(req_arg);
        if (this.stops.length === 1) {
            if (req_arg > this.currentFloor) {
                this.goingUp = true;
            } else {
                this.goingUp = false;
            }
        }
        console.log("Floor " + req_arg + " added to floor requests.")
    }

    this.showStopRequests = function() {
        console.log("Floors in Queue: ");
        for(var i = 0; i < this.stops.length; i++) {
            console.log(this.stops[i]);
        }
    }

    this.clearStops = function() {
        this.stops = [];
        console.log("Stops cleared.")
    }
}

///// TESTING /////
//var test = new elevator(-2,15);
//test.floorRequest(4);
//test.floorRequest(7);
//test.floorRequest(2);
//test.showStopRequests();
//test.nextFloor();
//test.nextFloor();
//test.nextFloor();
//test.nextFloor();
//test.floorRequest(4);
//test.floorRequest(3);
//test.showStopRequests();
//test.nextFloor();
//test.showStopRequests();
//test.floorRequest(7);
//test.showStopRequests();
//test.nextFloor();
//test.showStopRequests();
//test.nextFloor();

function console_elevator (arguments) {
    var mini = parseInt(prompt("What is the lowest floor in your building?"));
    var max = parseInt(prompt("What is the highest floor in your building?"));
    var building1 = new elevator(mini,max);
    while (user_in != "exit") {
        var user_in = prompt("What would you like to do?\nrequest\nshow\nnext\nexit");
        if (user_in == "request") {
            var floor = parseInt(prompt("What floor would you like to go to?"));
            building1.floorRequest(floor);
        }
        else if (user_in == "show") {
            building1.showStopRequests();
        }
        else if (user_in == "next") {
            building1.nextFloor();
        }
    }
}
