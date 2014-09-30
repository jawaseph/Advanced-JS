var joe = {name:"Joe"};

var setName = function(obj, name){

	obj["name"] = name; //

};

var rafi = {

	name: "Rafi";
	setName: function(name){
		this.name = name;
	}

}