console.log("***** Music Collection *****");

let collection = [];

/**
 * Creates a new record (item) in collection array
 * 
 * @param {String} title 
 * @param {String} artist 
 * @param {Number} yearPublished 
 * @returns The most recently added item
 */

function addToCollection(title, artist, yearPublished) {
  const newRecord = {
    title: title,
    artist: artist,
    yearPublished: yearPublished,
  };

  collection.push(newRecord);

  let addMsg = 'Most recent addition is ';

  return `${JSON.stringify(newRecord)}`;
}

//Add 6 items below
console.log(addToCollection('Word Up','Cameo',1986));
console.log(addToCollection('Juicy Fruit','Mtume',1983));
console.log(addToCollection('P.Y.T. (Pretty Young Thing)','Michael Jackson',1982));
console.log(addToCollection('Let It Whip','Dazz Band',1982));
console.log(addToCollection('Computer Love','ZAPP',1985));
console.log(addToCollection('More Bounce to the Ounce','ZAPP',1993));

//Log the collection object
console.log('Current collection is',collection);

function showCollection (musicCollection) {
    console.log('The number of songs in the collection is',musicCollection.length);

    for (let song of collection) {
        console.log(song.title,'by',song.artist,'was published in',song.yearPublished);
    }
}

//Test the first part of the showCollection function
showCollection(collection);