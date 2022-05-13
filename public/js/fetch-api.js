

var test = document.querySelector("#test")


function getApi() { 
    console.log("hello")
    
    fetch("https://www.googleapis.com/books/v1/volumes?q=sun-tzu+intitle:art-of-war")
  .then(function(res) {
    return res.json();
})
.then(function(result){

    console.log(result)
})
}

test.addEventListener("click", getApi)