const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  debugger
  if((prop==="traks")&&(value!=="")){
    debugger
    if(records.id.hasOwnProperty("traks")){
      debugger
      records.id.tracks.push(prop);
      debugger
    }else{records.id["tracks"]=[];
      debugger
    records.id.tracks.push(prop);
debugger
    }
  }
  return records;
}
console.log(updateRecords(recordCollection, 2468, "tracks", "Free"));