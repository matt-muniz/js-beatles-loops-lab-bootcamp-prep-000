// add solution here

var newArray = [];

function theBeatlesPlay(musicians, instruments){
  
  for (var i = 0; i < musicians.length; i++){
      newArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return newArray
}


function johnLennonFacts(facts){
  var i = 0
  while ( i < facts.length){
    console.log(facts)
  }
  return facts
}

johnLennonFacts(["welcome"])