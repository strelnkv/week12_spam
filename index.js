const nameFirst = document.querySelector("#textInput");
const img = document.querySelector("#urlInput");
const com = document.querySelector(".comments");

document.querySelector(".button").addEventListener("click", makeComment);

function makeComment() {
  debugger;
  const nameVal = nameFirst.value;
  const imgVal = img.value;
  const comVal = com.value;

  const newName = nameVal[0].toUpperCase() + nameVal.slice(1).toLowerCase();

  document.querySelector(".name").innerHTML = newName;
  document.querySelector(".avatar").src = imgVal;
  const n = comVal.replace(/(viagra|xxx)/gi, "***");
  document.querySelector(".commentarea").innerHTML = n;
}
