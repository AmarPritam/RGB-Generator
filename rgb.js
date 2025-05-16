let sliders = document.querySelectorAll('input[type="range"]');

sliders.forEach(function(slider) {
  slider.addEventListener("input", generate);
})


function generate(){
  let r = sliders[0].value;
  let g = sliders[1].value;
  let b = sliders[2].value;
  let a = sliders[3].value;
  
  document.getElementById('color').style.cssText = `
  background-color: rgba(${r}, ${g}, ${b}, ${a/100});
  `
  document.getElementById('copy').style.cssText = `
  background-color: rgba(${r}, ${g}, ${b}, ${a/100});
  `
  document.body.style.cssText = `
  background-color: rgba(${r}, ${g}, ${b}, ${a/100});
  `
  document.getElementById('code').innerHTML = `rgba(${r}, ${g}, ${b}, ${a/100}) `
}


function copyToClipboard(elementId){
    var aux = document.createElement("input");
    aux.setAttribute("value", document.getElementById(elementId).innerText);
    
    document.body.appendChild(aux);
    
    aux.select();
    document.execCommand("copy");
    
    document.body.removeChild(aux);
    
    alert("Code Copied!")
    
  }

generate();