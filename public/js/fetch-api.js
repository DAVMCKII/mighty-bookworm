

var search = document.querySelector("#search-button")


function getApi() { 
    var author =$("#author-value").val();
var title = $("#title-value").val();
    
    fetch("https://www.googleapis.com/books/v1/volumes?q="+author+"intitle:"+title)
    
  .then(function(res) {
    return res.json();
})
.then(function(result){

    console.log(result.items[0])
})
}

search.addEventListener("click", getApi)