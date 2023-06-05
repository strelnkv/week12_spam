const $nameInput = document.querySelector("#textInput");
const $urlInput = document.querySelector("#urlInput");
const $comInput = document.querySelector(".comments");
const $chat = document.querySelector(".wrapper_output");

let button = document.querySelector(".button");
button.addEventListener("click", handleClick);
button.addEventListener("click", generateRandomPicture);
button.addEventListener("click", cleanInput);

function handleClick() {
  //див для имени и даты
  const $namePlusDate = document.createElement("div");
  $namePlusDate.classList.add("namePlusDate");

  const $nameAvatar = document.createElement("div");
  $nameAvatar.classList.add("nameAv");

  //дата
  let now = new Date();
  const $date = document.createElement("p");
  $date.classList.add("date");
  $date.innerHTML =
    now.getDate() +
    "." +
    (now.getMonth() + 1) +
    "." +
    now.getFullYear() +
    " " +
    now.getHours() +
    "." +
    now.getMinutes();

  //имя пользвателя
  const $name = document.createElement("span");
  $name.classList.add("name");
  $name.innerHTML =
    $nameInput.value[0].toUpperCase() + $nameInput.value.slice(1).toLowerCase();
  //аватар
  const $avatar = document.createElement("img");
  $avatar.classList.add("avatar");

  if ($urlInput.value === "") {
    $avatar.src = generateRandomPicture();
  } else {
    $avatar.src = $urlInput.value;
  }

  //комментарий
  const $textarea = document.createElement("p");
  $name.classList.add("textarea");
  $textarea.innerHTML = $comInput.value.replace(/(viagra|xxx)/gi, "***");

  //помещаем в див
  const $newMessage = document.createElement("div");

  $newMessage.classList.add("newMessage");
  $nameAvatar.appendChild($avatar);
  $nameAvatar.appendChild($name);
  $newMessage.appendChild($textarea);
  $namePlusDate.appendChild($nameAvatar);
  $namePlusDate.appendChild($date);

  $chat.appendChild($newMessage);
  $newMessage.prepend($namePlusDate);
}
//аватарки для рандома
const imageArray = [
  "./assets/images/8cc7dd264b5a074e3a18af0a901fcf32.jpg",
  "./assets/images/7212c1040e6bd49754ff51b0403cb8fa.jpg",
  "./assets/images/65848609e6ce3597a49ce75367714385.jpg",
  "./assets/images/f47e4d8d0cfbfef0871d14ba177149f2.jpg",
  "./assets/images/fae660883b977d9764e55fea41cfc0b9.jpg",
];

function generateRandomPicture() {
  let randomNum = Math.floor(Math.random() * imageArray.length);
  return imageArray[randomNum];
}

function cleanInput() {
  $urlInput.value = "";
  $comInput.value = "";
  $nameInput.value = "";
}
