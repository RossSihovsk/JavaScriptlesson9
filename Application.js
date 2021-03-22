getAge.onblur = function() {
    if ((this.value < 0) || (this.value > 100) || (isNaN(this.value))) {
        document.getElementById("Message").style = "visible";
        document.getElementById("AjaxGET").disabled = true;
        document.getElementById("AjaxPOST").disabled = true;
        getAge.classList.add('error');
    } else {
        document.getElementById("Message").style.visibility = "hidden";
        document.getElementById("AjaxGET").disabled = false;
        document.getElementById("AjaxPOST").disabled = false;
        getAge.classList.remove('error');
    }
}


function sendDataByGetMethod() {
    let userData = {
        lName : document.getElementById('getLastName').value,
        fName : document.getElementById('getFirstName').value,
        age : document.getElementById('getAge').value,
        address : document.getElementById('getAddress').value
    };

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/userGet?lName=" + userData.lName + "&fName="
        + userData.fName + "&age=" + userData.age + "&address="
        + userData.address);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send();
}

function sendDataByPostMethod() {
    let userData = {
        lName : document.getElementById('getLastName').value,
        fName : document.getElementById('getFirstName').value,
        age : document.getElementById('getAge').value,
        address : document.getElementById('getAddress').value
    };

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/userPost");
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send(JSON.stringify(userData));
}