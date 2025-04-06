
# Selecting
// Modern method - querySelector
let specificElement = document.querySelector('.myClass');
let specificElementById = document.querySelector('#myId');

// Select all matching elements
let allElements = document.querySelectorAll('.myClass');


//select element
const body = document.body; //make sure to put 'defer' in your html script tage to wait for DOM to load first!

//append and appendChild are pretty much same, use append for better flexibility (strings)


//SECTION - Adding Elements

body.append("im just a string"); //works
// body.appendChild('hi'); //will not work, only nodes (elements only, no strings)


//append mulitple things
// body.append('hi', 'bye'); 




//SECTION - Creating Elements
const div = document.querySelector('div') // ??
const div1 = document.createElement('div'); //only a reference to new object
body.append(div1); //must append each time, this works
body.append(div1); //REVIEW -  wont append twice? need to create a new element //??


const div2 = document.createElement('div');
body.append(div2); //works


console.log(div1, div2); // use console.log to locate errors





# Modifying Elements
// Changing text
element.textContent = 'New Text';
element.innerHTML = '<strong>Bold Text</strong>';

// Changing styles
element.style.color = 'red';
element.style.backgroundColor = 'blue';

// Addin/Removing classes
element.classList.add('newClass');
element.classList.remove('oldClass');g
element.classList.toggle('activeClass');


# Event Listeners
// Basic click event
element.addEventListener('click', function() {
    console.log('Element clicked!');
});

// More complex example
let button = document.querySelector('#myButton');
button.addEventListener('click', function(event) {
    // Do something when button is clicked
    console.log('Button was clicked!');
});



# Creating and Removing Elements
// Create a new element
let newDiv = document.createElement('div');
newDiv.textContent = 'New Div Element';

// Append to an existing element
parentElement.appendChild(newDiv);

// Remove an element
element.remove();


# Removing Inline Elements

removing inline css elements from html in the DOM
	- .textContent
	- .style.color
	- .remove
	- document.querySelector('p').classList.add('underlined');
	- subHeading.classList.remove('sub-heading');

# Appending Classes
 .forEach(heading => heading.classList.add('fancy'))  //adds a css properties from fancy class to each heading found in the DOM


 hide text button - add EventListener('click', cb)
- cb = (e) =>{}
- note - e is the event itself

paragraph.classList.toggle('hidden')

.appendChild.newItem



//SECTION - Removing Elements
const body = document.body

//we want to remove the span elements hard coded in our HTML file
const firstDiv = document.querySelector('div')
const spanHi = document.querySelector('#hi')
const spanBye = document.querySelector('#bye')

spanBye.remove(); //call remove function // removes spans with id #bye on page
firstDiv.append(spanBye); //this is not permanent, we can add it back into the first div

//remove element from its parent
// firstDiv.removeChild(); //will this work? NO, you need to specify WHICH CHILD //error
firstDiv.removeChild(spanBye); // this is correct  //since easy typo, just use element.remove() instead





//SECTION - Modifying HTML inside an Element

const body = document.body  //access the html body
const newDiv = document.createElement('div')  //create new div

//nope, this is the TEXT as is "<strong>hello world !<strong>". not render
newDiv.textContent = "<strong>hello world !<strong>" 
body.append(newDiv)


//yes, this will RENDER  HTML inside an elemnent
newDiv.innerHTML = "<strong>hello world !<strong>"
body.append(newDiv)

//NOTE - this a HUGE SECURITY ISSUE, you allow users to change the content!

//anothter thing we could do to be more secure - break it out like below
const strong = document.createElement('strong'); //create new el // strong refers to a MODULE
strong.innerText = "Strong World 2" //add text inside that new el
newDiv.append(strong) //append this new el to the first div

//we can do the same thing, put emphasis module, which we give us italics
const em = document.createElement('em'); //create new el // strong refers to a MODULE
em.innerText = "Emphasised" //add text inside that new el

newDiv.append(em) //append this new el to the first div




console.log('Hello');


// get by id and querySelector with # work more or less the same way

const mainHeadingbyId = document.getElementById('main-heading');
console.dir(mainHeadingbyId);
const mainHeadingByQuery = document.querySelector('#main-heading');
console.dir(mainHeadingByQuery);



// query selector grabs the first matching element for our query, even if there are multiple

const subHeading = document.querySelector('.sub-heading');
console.log(subHeading);

const subHeading = document.querySelector('.new-font')


// the first paragraph
console.log(document.querySelector('p'));
// the first article
console.log(document.querySelector('article'));

// we might want to match all elements
// this returns a **NodeList**
const subHeadingsByQuery = document.querySelectorAll('.sub-heading');
console.log(subHeadingsByQuery);
console.log(subHeadingsByQuery[0]);

// the older way
const subHeadingsByClassname = document.getElementsByClassName('sub-heading');
console.log(subHeadingsByClassname);
console.log(subHeadingsByClassname[0]);
// be aware of the differences between nodelist and html collection
// https://www.w3schools.com/js/js_htmldom_nodelist.asp

// Manipulating the DOM

// Alter content
mainHeadingByQuery.textContent = 'Hi my name is';
// change inline styles
mainHeadingByQuery.style.color = 'green';
// add and remove classes
// underline first paragraph
document.querySelector('p').classList.add('underlined');
console.log(subHeadingsByClassname);
subHeading.classList.remove('sub-heading');
console.log(subHeadingsByClassname);
// iterating over lists/collections

// node list does not live update. first heading was in the list when we created it
subHeadingsByQuery.forEach((heading) => heading.classList.add('fancy'));

// html collection live updates - the collection changes when we remove that class from the first subheading

for (let heading of subHeadingsByClassname) {
  console.log(heading);
  heading.style.color = 'green';
}

// JS is about dynamically changing the dom content based on user interaction
const toggleLongParagraph = () => {
  // hide the paragraph if it is showing
  const paragaph = document.querySelector('#long-para');
  //   if (paragaph.classList.contains('hidden')) {
  //     paragaph.classList.remove('hidden');
  //   } else {
  //     paragaph.classList.add('hidden');
  //   }
  paragaph.classList.toggle('hidden');
  // show the paragraph if it is hidden
  //toggle the button text
  document.querySelector('button').innerText =
    document.querySelector('button').innerText === 'Hide Text'
      ? 'Show Text'
      : 'Hide Text';
};

document.querySelector('button').addEventListener('click', toggleLongParagraph);

// we can use javascript to create elements
const newPara = document.createElement('p');
const paraText = document.createTextNode('Hello world');
newPara.appendChild(paraText);
document.body.appendChild(newPara);

document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  const input = document.querySelector('input');
  const value = input.value.trim();
  console.log(value);
  if (!value) {
    input.style.border = '1px solid red';
    alert('input can not be empty');
    return;
  }

  const newItem = document.createElement('li');
  const liText = document.createTextNode(value);
  newItem.appendChild(liText);
  document.querySelector('ul').appendChild(newItem);
  input.style.border = '';
  e.target.reset();
});
