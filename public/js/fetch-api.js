



// function getApi() { 
//   var author =$("#author-value").val();
//   var title = $("#title-value").val();
//   var bookName = document.getElementById("title");
//   var subtitle = document.getElementById("subtitle");
//   var genre = document.getElementById("genre");
//   var authorName = document.getElementById("author");
//   var pageCount = document.getElementById("page-count");
//   var description = document.getElementById("description");
  
  
//   fetch("https://www.googleapis.com/books/v1/volumes?q="+author+"intitle:"+title)
  
//   .then(function(res) {
//     return res.json();
//   })
//   .then(function(result){
    
//     console.log(result.items)
//     var newBook ={
//       title: bookName.innerHTML = result.items[0].volumeInfo.title,
//       subtitle:  subtitle.innerHTML = result.items[0].volumeInfo.subtitle,
      
//       genre: genre.innerHTML = result.items[0].volumeInfo.categories,
//       author: authorName.innerHTML = result.items[0].volumeInfo.authors,
//       page_count: pageCount.innerHTML = result.items[0].volumeInfo.pageCount,
//       description: description.innerHTML = result.items[0].volumeInfo.description,
      
      
      
//     }
//   })
// }

// var search = document.querySelector("#search-button")

// search.addEventListener("click", getApi)
