function Greet(name) {
  if (name === null) {
    return "Hello there!";
  }

  if (typeof name === "string") {
    if (name === name.toUpperCase()) {
      return "HELLO " + name + "!";
    } else {
      return "Hello, " + name;
    }
  }

  if (Array.isArray(name)) {
    if (name.length === 2) {
      return "Hello, " + name.join(", ");
    } else {
      return "Hello, " + name.join(", ");
    }
  }
}

console.log(Greet("Elizabeth"));
// Output: Hello, Elizabeth

console.log(Greet(null));
// Output: Hello there!

console.log(Greet("JOSE"));
// Output: HELLO JOSE!

console.log(Greet(["Jose", "Pep"]));
// Output: Hello, Jose, Pep

console.log(Greet(["Alex", "Arsene", "Jose", "Zidane"]));
// Output: Hello, Alex, Arsene, Jose, Zidane