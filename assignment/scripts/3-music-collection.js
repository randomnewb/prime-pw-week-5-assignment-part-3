console.log("***** Music Collection *****");

let collection = [];

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




console.log(addToCollection('Word Up','Cameo',1986));
console.log(addToCollection('Juicy Fruit','Mtume',1983));
console.log(addToCollection('P.Y.T. (Pretty Young Thing)','Michael Jackson',1982));
console.log(addToCollection('Let It Whip','Dazz Band',1982));
console.log(addToCollection('Computer Love','ZAPP',1985));
console.log(addToCollection('More Bounce to the Ounce','ZAPP',1993));


console.log('Current collection is',collection);