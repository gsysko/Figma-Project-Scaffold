import './ui.css'

const form = document.getElementById("form") as HTMLFormElement;
form.onsubmit = function() {return createProject()}

window.onload = function() {
  //Do nothing on load
};

function createProject() {
  const title = document.getElementById("title-input") as HTMLInputElement;
  const type = document.getElementById("type-select") as HTMLSelectElement;
  const description = document.getElementById("desc-area") as HTMLTextAreaElement;
  parent.postMessage({ pluginMessage: { type: 'create-projct', projectTitle: title.value, projectType: type.value, projectDescription: description.value } }, '*');
}