const originalObj = { a: 'b', deep: { a: 'b' } };
const shallowCopy = { ...originalObj };
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


console.log(deepClone);
deepClone.a = 'c';
deepClone.deep.a = 'c';
console.log(originalObj.a); //b
console.log(originalObj.deep.a); //c