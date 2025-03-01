// Random Background Color Generator for Body Tag (Took help from FreeCodeCamp Article)

const hexCharacters = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]


function getCharacter(i){
  return hexCharacters[i];
}

function generateAColor(){
  let hexColorRep = "#"

  for(let i = 0; i < 6; i++){
    hexColorRep += getCharacter(i)
  }
  return hexColorRep;
}

// console.log(generateAColor());

const randomBackgroundColor = document.getElementById("btn-random-bg-color").addEventListener("click", function(){
  // document.getElementsByTagName("body").classList.remove("bg-default");
  document.querySelector("body").classList.remove("bg-default");
  const randomColor = generateAColor();
  document.querySelector("body").classList.add("bg-[" + randomColor + "]");
})