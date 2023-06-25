document.getElementById("submit").onclick=function(){
    //hide first interface, and display second interface.
    document.querySelector(".outer-wrapper").style.display="none";
    document.querySelector(".outer-wrapper1").style.display="inline-block";

    let rating = querySelector("number-wrapper.selected").textContent;
    document.getElementById("myOutput").innerHTML=`You selected ${rating} out of 5`;
}

const numberWrappers = document.getElementsByClassName("number-wrapper");
const myOutput = document.getElementById("myOutput");

// Loop through each number wrapper and add event listeners
for (let i = 0; i < numberWrappers.length; i++) {
  numberWrappers[i].addEventListener("click", function() {
    // Remove the "selected" class from all number wrappers
    for (let j = 0; j < numberWrappers.length; j++) {
      numberWrappers[j].classList.remove("selected");
    }
    // Add the "selected" class to the clicked number wrapper
    this.classList.add("selected");

    myOutput.innerHTML = "You selected " + this.innerHTML + " out of 5";
  });
}
  
  
  