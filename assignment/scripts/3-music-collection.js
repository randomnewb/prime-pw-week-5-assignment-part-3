console.log("***** Music Collection *****");

let collection = [];

function addToCollection(title, artist, yearPublished) {
  let newRecord = {
    title: title,
    artist: artist,
    yearPublished: yearPublished,
  };

  collection.push(newRecord);

  return newRecord;
}
console.log('Current collection is',collection);

console.log('Most recent addition is',addToCollection('Danger Zone','What',1954));