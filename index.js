// Example: Array of arrays of objects
const data = [
  [
    { name: "John", age: 28 },
    { name: "Jane", age: 32 }
  ],
  [
    { name: "Bob", age: 24 }
  ]
];

// Extract names from the data array
const names = data.flat().map(person => person.name);

console.log(names); // Desired outcome: ['John', 'Jane', 'Bob']