console.log("***** Music Collection *****");

//Declare an empty collection array to store songs
let collection = [];

/**
 * Creates a new record (item) in collection array
 *
 * @param {String} title Title of a song
 * @param {String} artist Name of the artist
 * @param {Number} yearPublished Year the song was published
 * @returns The most recently added item
 */

function addToCollection(title, artist, yearPublished) {
  //Create an empty object which can take in 3 inputs
  const newRecord = {
    title: title,
    artist: artist,
    //Changed yearPublished property to year to work with universal/flexible search below
    year: yearPublished,
  };

  collection.push(newRecord);

  let addMsg = "Most recent addition is ";

  //Practing trying to use template literal syntax to log the songs
  return `${JSON.stringify(newRecord)}`;
}

//Add 6 items below
console.log(addToCollection("Word Up", "Cameo", 1986));
console.log(addToCollection("Juicy Fruit", "Mtume", 1983));
console.log(
  addToCollection("P.Y.T. (Pretty Young Thing)", "Michael Jackson", 1982)
);
console.log(addToCollection("Let It Whip", "Dazz Band", 1982));
console.log(addToCollection("Computer Love", "ZAPP", 1985));
console.log(addToCollection("More Bounce to the Ounce", "ZAPP", 1993));

//Log the collection object
console.log("Current collection is", collection);

/**
 * Logs total number of songs in a collection and also the title, artist, and date published
 * @param {Array} musicCollection Array that contains objects with 3 properties (title, artist, and date published)
 */

function showCollection(musicCollection) {
  //Log the current number of songs in the collection
  console.log(
    "The number of songs in the collection is",
    musicCollection.length
  );
  //Iterate through each song in the collection and log them
  for (let song of collection) {
    console.log(song.title, "by", song.artist, "was published in", song.year);
  }
}

//Test the first part of the showCollection function
//Also tests the second part of the function
showCollection(collection);

/**
 * Function that searches a collection of music for the specified artist and returns any songs found that match the artist
 * @param {String} artist Artist name
 * @param {Array} musicCollection Array that contains objects with 3 properties (title, artist, and date published)
 * @returns Songs that match artist from search
 */

function findByArtist(artist, musicCollection) {
  let holder = [];

  //Look through each song in the collection
  for (let song of musicCollection) {
    //If a matching artist is found, add the entire song to the holder array to return results later
    if (song.artist === artist) {
      holder.push(song);
    }
  }

  //Console logs an empty array if the array is empty or else
  if (holder.length === 0) {
    holder = console.log(holder);
    //Console tables if the search finds one or more matches
  } else holder = console.table(holder);

  return holder;
}

//Test by searching for various artists including ones that do not exist in collection
findByArtist("ZAPP", collection);

//Should expect an empty array because no songs by Lakeside are in collection
findByArtist("Lakeside", collection);

//Should find just one entry each for the other searches
findByArtist("Cameo", collection);
findByArtist("Michael Jackson", collection);

//Declare search objects for stretch goal

//Search object from stretch goal
let searchSample = {
  artist: "Ray Charles",
  year: 1957,
};

//Search object in which we know one record exists
let searchExist = {
  artist: "Michael Jackson",
  year: 1982,
};

//Search object in which we know artist and year exists and matches
//Other year for ZAPP - 1985 does not match
let singleArtist = {
  artist: "ZAPP",
  year: 1993,
};

//Declare a search object that has 3 search queries
let tripleSearch = {
  artist: "Mtume",
  year: 1983,
  title: "Juicy Fruit",
};

let specificArtist = {
  artist: "ZAPP",
};

//Empty search object
let emptySearch = {};

/**
 * Flexibly searches a music collection using properties from a searchObject
 * @param {Object} searchObject Takes a search object with properties that potentially match properties in a music collection
 * @param {Array} musicCollection Takes an array of songs with various properties
 * @returns Matching songs and their information from provided search query
 */

function search(searchObject, musicCollection) {
  // Holder array for potential song matches
  let matches = [];

  // If the searchObject is empty
  if (JSON.stringify(searchObject) === "{}") {
    // Immediately return the empty message and the entire collection
    return `Empty or no search object, returning entire collection ${JSON.stringify(
      musicCollection,
      "",
      "\t"
    )}`;
  }
  //Loop through musicCollection
  for (let song of musicCollection) {
    //Declare a valid variable to use as validation and set it as true to start
    let valid = true;
    // console.log(song);
    //Loop through the search types in the searchObject
    for (let prop in searchObject) {
      // console.log(prop);
      // console.log(searchObject[prop]);
      // console.log(prop);
      // console.log(song[prop]);
      //If there is not an exact match for all search queries between the searchObject and the song
      if (searchObject[prop] !== song[prop]) {
        //Set our validation variable to false
        valid = false;
      }
    }
    if (valid) {
      //Only if there is complete matches then push the song or songs to our matches array
      matches.push(song);
    }
  }
  //Return all the song matches (if any)

  // let emptyMsg = 'Empty search query, here is the entire collection';
  // console.log(emptyMsg);
  // console.log('Hello');
  // return (emptyMsg + musicCollection);
  return matches;
}

// Return the sample search from the stretch goal
console.log(search(searchSample, collection));

// Trying different cases
console.log(search(tripleSearch, collection));
console.log(search(singleArtist, collection));
console.log(search(specificArtist, collection));

// Trying an empty search
console.log(search(emptySearch, collection));

// Previous function that strictly takes artist and yearPublished

//Look through the records of musicCollection
// for (let song of musicCollection) {

//   //if the artist and year published we are searching for matches a record in the musicCollection...
//   if (song.artist === searchObject.artist && song.yearPublished === searchObject.year) {
//         //Push the song to an array
//         match.push(song.artist);
//         match.push(song.yearPublished);
//         matches.push(match);
//         //empty match to prepare for any other matches
//         match = [];
//   } else if (searchObject.artist === undefined && searchObject.year === undefined) {
//     console.log(song.artist);
//     console.log(song.yearPublished);
//     let emptySearch = 'Empty search, showing entire collection';
//     return `${emptySearch},${JSON.stringify(musicCollection)}.`;
//   }
// }
// if (matches.length > 0) {
//   let matchMsg = 'Here are the matching artists and years';
//   return `${matchMsg},${JSON.stringify(matches)}`;
// } else {
//   let notFound = 'No entries found, showing empty collection'
//   return `${notFound},${JSON.stringify(matches)}`;
// }

//Test cases
// console.log(search(searchSample,collection));
// console.log(search(searchExist,collection));
// console.log(search(singleArtist,collection));
// console.log(search(emptySearch,collection));

// let cameoAlbumWordUp = [
//   { title: 'Word Up',
//     artist: 'Cameo',
//     yearPublished: '1986',
//     duration: 432,

//   }
// ]

// let eightysFunk = [];
// eightysFunk = [cameoAlbumWordUp];
