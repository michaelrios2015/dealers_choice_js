//an object ascting as our database can be anything 

const data = [
    { id: 1, title: "Things I sometimes think about", content: "so so many things the best things!! you know it i know they all know it", name: "Presidente"},
    { id: 2, title: "Things I sometimes DONT think about", content: "WHAT AR YOU THINK ABOUT WHY IS THAT CRAZY THINKING", name: "That guy in your head"},
    { id: 3, title: "CAts on the Bats with Rats", content: "Ryhmes that start with dimes and turn into crimes against humanity insanity ", name: "cat of the bat"},
    { id: 4, title: "Dogs bogs hogs and frogs", content: "random words are disturbed and rather petrubed if you heard!!", name: "the people"},
    { id: 5, title: "Me spinning in my brains", content: "Newer more, pever more, maybe more..... never mind :)", name: "Crow say no no"},
    { id: 6, title: "Stewing in my own juices :)", content: "This was a story about a dinosaur a happy dinosaur a lovely happy dinasour", name: "Mr. Foxy pants"},
    { id: 7, title: "Smells that are hard to indentify", content: "I think i took a bath I probably took a bath I mean I definitly took a bath at some point pretty sure I did", name: "The gator on the nator"},
    { id: 8, title: "That thing you forgot about", content: "I forget nothing except most of my life but that's good you need to forget to remember, remember the almos yo", name: "The sophistaced gato"},
    { id: 9, title: "Regrests: so many", content: "I was once so pretty so so prettty the world beat a path to my door and I beat them back take that i said", name: "Giant furry orange creature"},
    { id: 10, title: "Happy happy thoughts!!", content: "What kind of thoughts did you ask about!! happy.... not sure i know that word :)", name: "the green tailed giant"}
];

//so just spreads the data into an array is it an array in an array??
const list = () => {
    return [...data] // Notice that we're returning a copy of the array, so the original data is safe. This is called 'immutability'.
  }; 
  
  //in theory this is a simple function but what the hell is +id?? let me see if I can get it to work and then go through this more carfully
  const find = (id) => {
    const post = data.find(post => post.id === +id);
    return {...post}; // Again, we copy the post data before returning so the original information is safe.
  }
  
  module.exports = { list: list, find: find };