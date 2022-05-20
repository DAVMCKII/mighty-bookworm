
var search = document.querySelector("#search-button")



var bookName = document.getElementById("title");
var subtitle = document.getElementById("subtitle");
var genre = document.getElementById("genre");
var authorName = document.getElementById("author");
var pageCount = document.getElementById("page-count");
var description = document.getElementById("description");
var addBook = document.querySelector("#new-book")

function getApi() { 

    var author =$("#author-value").val();
    var title = $("#title-value").val();
    fetch("https://www.googleapis.com/books/v1/volumes?q="+author+"intitle:"+title)
    
    .then(function(res) {
        return res.json();
    })
    .then(function(result){
        
        console.log(result.items)
    
        bookName.innerHTML = result.items[0].volumeInfo.title,
        subtitle.innerHTML = result.items[0].volumeInfo.subtitle,
        genre.innerHTML = result.items[0].volumeInfo.categories,
        authorName.innerHTML = result.items[0].volumeInfo.authors,
        pageCount.innerHTML = result.items[0].volumeInfo.pageCount,
        description.innerHTML = result.items[0].volumeInfo.description
            
    })

}
            
            
    
    
     
    
    function postData(){
        
        const bookTitle = bookName.innerHTML;
        const bookSubtitle = subtitle.innerHTML;
        const bookGenre = genre.innerHTML;
        const bookAuthor = authorName.innerHTML;
        const page_count = pageCount.innerHTML;
        const  bookDescription = description.innerHTML;
        
        console.log(bookDescription);
        
            fetch('/api/book', {
                    method: 'POST',
                    body: JSON.stringify({
                           bookTitle, 
                            bookSubtitle,
                            bookGenre,
                            bookAuthor,
                            page_count,
                            bookDescription                        


                    }),
                    headers: {
                            'Content-Type': 'application/json'
                           
                        }
                    });
                
                
            }
                
                    
                    
                    
                    
                    
                    // addBook.addEventListener("click", postData)
                    
                    search.addEventListener("click", getApi)
                    addBook.addEventListener("click", postData )
                    
    //                 async function newBookHandler(event){
    //     event.preventDefault();
        
        
        
        
        
    // }
    
    // document .querySelector('#new-book').addEventListener('Search', newBookHandler);
