function hasProperty(obj, property) {
    return obj.hasOwnProperty(property);
}

const sampleObject = { name: "John", age: 30, city: "New York" };
console.log(hasProperty(sampleObject, "age")); 
console.log(hasProperty(sampleObject, "gender")); 
