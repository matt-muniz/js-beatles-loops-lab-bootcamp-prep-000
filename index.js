// add solution here

var newArray = [];

function theBeatlesPlay(musicians, instruments){
  
  for (var i = 0; i < musicians.length; i++){
      newArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return newArray
}


function johnLennonFacts(array){
  var i = 0
  var facts = ["hello"]
  while ( i < array.length){
    facts.push(`${array[i]}!!!`)
    i++
    // return facts
    console.log(facts)
  }
}
johnLennonFacts(["fasf"])