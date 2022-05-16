async function deleteBookHandler(event){
    event.preventDefault();

    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length -1
    ];


    const response = await fetch('/api/book/${id}', {
        method: 'DELETE',

        });


    if (response.ok) {
        document.location.replace('/book');
    } else {
        alert(response.statusText);
    }
}

document .querySelector('.delete-book-btn').addEventListener('click', deleteBookHandler);