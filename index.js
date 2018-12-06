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
  var facts = []
  while ( i <= facts.length){
    console.log("hello")
    facts.push(`${array[i]}`)
    console.log(facts[i])
    i++
  }
}

johnLennonFacts(["!!!"])