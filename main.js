var clicks = 0;
// modify webpage
function buttonClicked() {
    clicks = clicks + 1;
    // select element to update
    let buttonDiv = document.getElementById('button-id');
    // update text 
    buttonDiv.innerHTML = 'Number of times button clicked: ' + clicks;
    console.log(clicks)
}
