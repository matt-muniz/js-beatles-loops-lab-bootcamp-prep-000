// add solution here

var newArray = [];

function theBeatlesPlay(musicians, instruments){
  
  for (var i = 0; i < musicians.length; i++){
      newArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return newArray
}


function johnLennonFacts(){
  var i = 0
  var facts = ["who", "when", 'what']
  while ( i < facts.length){
    
    console.log(facts.push("!!!"))
    
    i++
  }
}

johnLennonFacts()