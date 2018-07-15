module.exports=function(output){
  var intent=output.intent.name;
  //console.log(intent);
  //var entity=output.entities[0].value;
  //console.log(entity);
  /*for(i=0;i< entity.length;i++)
  {
    console.log(entity[i].value);
  }*/
  switch(intent)
  {
    case "greet": return "Hi there!!";
    case "affirm": return "Ok, got that.";
    case "goodbye": return "It was great talking to you, have a great meal!";
    default: return "sorry, I didn't understand your input.";
  };
};
