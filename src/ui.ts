import './ui.css'

const form = document.getElementById("form") as HTMLFormElement;
form.onsubmit = function() {return createProject()}

window.onload = function() {
  //Do nothing on load
};

onmessage = (event) => {
  if (event.data.pluginMessage == "missing_font"){
    //Do nothing on missing fonts
  }
}

function createProject() {
  debugger
  const title = document.getElementById("title-input") as HTMLInputElement;
  const type = document.getElementById("type-select") as HTMLSelectElement;
  parent.postMessage({ pluginMessage: { type: 'create-projct', projectTitle: title.value, projectType: type.value } }, '*');
}