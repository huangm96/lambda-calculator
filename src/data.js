// STEP 1 - Get the modules here exported before building out your components
// Don't worry about bringing all of these into the same file.
// Export them as necessary and import each array into its appropriate
// file. No real tricks here just be aware of what is in each array
// and how you'll access the data.

const numbers = [
  {
    buttonName:"one",
    number:"1"
},
{
  buttonName:"two",
  number:"2"
},
{
  buttonName:"three",
  number:"3"
},
{
  buttonName:"four",
  number:"4"
},

{
  buttonName:"five",
  number:"5"
},
{
  buttonName:"six",
  number:"6"
},
{
  buttonName:"seven",
  number:"7"
},
{
  buttonName:"eight",
  number:"8"
},
{
  buttonName:"nine",
  number:"9"
},
{
  buttonName:"zero",
  number:"0"
},
{
  buttonName:"dot",
  number:"."
}
];

const operators = [
  {
    char: "/",
    value: "/"
  },
  {
    char: "x",
    value: "*"
  },
  {
    char: "-",
    value: "-"
  },
  {
    char: "+",
    value: "+"
  },
  {
    char: "=",
    value: "="
  }
];

const specials = ["C", "+/-", "%"];

export{numbers,  operators,specials};