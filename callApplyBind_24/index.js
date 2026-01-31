let name = {
  firstName: "Lalit",
  lastName: "Bindhani",
};

let printFullName = function (place, state) {
  console.log(
    this.firstName + " " + this.lastName + " from " + place + ", " + state,
  );
};

printFullName.call(name, "Bhubaneswar", "Odisha");

let name2 = {
  firstName: "Lopamudra",
  lastName: "Bindhani",
};

printFullName.call(name2, "Bhubaneswar", "Odisha");

printFullName.apply(name2, ["Bhubaneswar", "Odisha"]);

let printMyName = printFullName.bind(name2, "Bhubaneswar", "Odisha");
printMyName();
/*
call method :- we can borrow function from another function to use it 
the difference between call and bind method is it gives us a copy but which can be 
invoked leter
*/
