const college = {
  name: "Truman State",
  city: "Kirksville",
  state: "Missouri",
  year: 1995,
  colors: {
    color1: "purple",
    color2: "white"
  }
};

const myKey = "year";

while (college[myKey] < 1999) {
  college[myKey] += 1;
}
console.log(college[myKey]);
