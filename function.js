let onImage = document.querySelector("#onImage");
onImage.style.visibility = 'hidden';
let offImage = document.querySelector("#offImage");
// by default off is visible and on image in hidden

let onBtn = document.querySelector("#onBtn");
let offBtn = document.querySelector("#offBtn");

let showOnFx = () => {
 offImage.style.visibility = 'hidden';
 onImage.style.visibility = 'visible';
}

let hideOnFx = () => {
 offImage.style.visibility = 'visible';
 onImage.style.visibility = 'hidden';
}
onBtn.addEventListener('click', showOnFx);
offBtn.addEventListener('click', hideOnFx);