async function newBookHandler(event){
    event.preventDefault();

    const title = document.querySelector('input[name="Book Name"]').value;
    const subtitle = document.querySelector('input[name="subtitle"]').value;
    const genre = document.querySelector('input[name="genre"]').value;
    const author = document.querySelector('input[name="author"]').value;
    const PageCount = document.querySelector('input[name="Page.Count"]').value;
    const ISBN = document.querySelector('input[name="ISBN"]').value;


    const response = await fetch('/api/book', {
        method: 'POST',
        body: JSON.stringify({
            title,
            subtitle,
            genre,
            author,
            PageCount,
            ISBN

        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/book');
    } else {
        alert(response.statusText);
    }
}

document .querySelector('.new-book').addEventListener('Search', newBookHandler);
