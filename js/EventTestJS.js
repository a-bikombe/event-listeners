// declarations
let count = 0;
let clickCountOutput = document.getElementById("count");
let txtarea = document.getElementById("story");
let countOutput = document.getElementById("txtareaValCount");
let progressBar = document.getElementById("progress-bar");
let minLength = txtarea.getAttribute('minlength');
let charCountMsg = document.getElementById("char-count-error-msg");
let txtareaLabel = document.getElementById("textarea-label");
let txtareaValCount = 0;
let percentComplete = 0;

// these run on load
countOutput.textContent = txtareaValCount + "/" + minLength;

// click count function
document.getElementById("btn").addEventListener("click", function(evt) {
    count++;
    clickCountOutput.textContent = count;
});

// textarea function
txtarea.addEventListener("keyup", function(evt) {
    progressBar.setAttribute('max', minLength);
    
    let txtareaVal = txtarea.value.trim();
    txtareaValCount = txtareaVal.length;
    countOutput.textContent = txtareaValCount + "/" + minLength;
    
    percentComplete = txtareaValCount;
    progressBar.setAttribute('value', percentComplete);
    progressBar.textContent = percentComplete + "%";
    
    if (txtareaValCount >= minLength) {
        charCountMsg.setAttribute('class', 'char-count-error-msg-valid');
    } else {
        charCountMsg.setAttribute('class', 'char-count-error-msg-invalid');
    }
});