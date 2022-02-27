const originalObj = { a: 'b', deep: { a: 'b' } };
// const shallowCopy = { ...originalObj };
// shallowCopy.a = 'c';
// shallowCopy.deep.a = 'c';
// console.log(originalObj.a); //b
// console.log(originalObj.deep.a); //c

//Deep clone
const deepCloneObject = (obj) => {
	const clonedObject = {};

	for (const prop in obj) {
		if (typeof obj[prop] === 'object' && obj[prop] !== null) {
			clonedObject[prop] = deepCloneObject(obj[prop]);
		} else {
			clonedObject[prop] = obj[prop];
		}
	}

	return clonedObject;
}

const deepClone = deepCloneObject(originalObj);

deepClone.a = 'c';
deepClone.deep.a = 'c';
console.log(deepClone);
console.log(originalObj.a); //b
console.log(originalObj.deep.a); //b

const testOriginal = { name: 'Nick', age: 10, deep: { age: 10 } };
const shallowCopy = testOriginal;
shallowCopy.deep.age = 20;
console.log(testOriginal.deep.age) // should be 20 due to shallow copy (we get the same result if we do this for shallow: { ...testOriginal })

const clonedObj = deepClone(testOriginal);
clonedObj.name = 'John';
console.log(testOriginal.name); // should still be Nick