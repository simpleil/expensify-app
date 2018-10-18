console.log('destructuring.js');

const person = {
	name: 'Andrew',
	age: 27,
	location: {
		city: 'Philadelphia',
		temp: 88
	}
};

const { name: firstName = 'anonymous', age } = person;
console.log(`${firstName} is ${age}`);

const { city, temp: temperature} = person.location;
if (city && temperature) {
	console.log(`It's ${temperature} in ${city}`);
}

const book = {
	title: 'Ego is the Enemy',
	author: 'Ryam Holiday',
	publisher: {
		name: 'Penguin'
	}
};

const { name : publisherName = 'Self-Published'}  = book.publisher;
console.log(publisherName);
console.log('++++++++++++++++');
console.log('++++++++++++++++');


const item = ['Coffee(hot)', '$2.00', '$2.50', '$2.75'];
const [itemName,,medium] = item;
console.log(`A medium ${itemName} costs ${medium}`)
