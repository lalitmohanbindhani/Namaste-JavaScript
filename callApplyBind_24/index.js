let name = {
  firstName: "Lalit Mohan",
  lastName: "Bindhani",
};
let name2 = {
  firstName: "Sachin",
  lastName: "Tendulkar",
};

let printFullname = function (hometown, state) {
  console.log(
    this.firstName + " " + this.lastName + " from " + hometown + "," + state
  );
};

printFullname.call(name, "Bhubaneswar", "Odisha");

printFullname.apply(name2, ["Mumbai", "Maharastra"]);

let printMyName = printFullname.bind(name, "Bhubaneswar", "Odisha");
console.log(printMyName);
printMyName();
/*
call method :- we can borrow function from another function to use it 
the difference between call and bind method is it gives us a copy but which can be 
invoked leter
*/
