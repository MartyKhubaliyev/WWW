var obj = {
    color : "color",
    name : "name"
}
function write (){
    console.log(1);
}

var a = new write();

function Person(color, name){
    this.color = color;
    this.name = name;
}

var Jack = new Person('white', 'Jack');