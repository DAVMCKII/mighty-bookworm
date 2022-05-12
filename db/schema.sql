CREATE TABLE genre(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    primary_genre VARCHAR(75) NOT NULL,
    secondary_genre VARCHAR(75) NOT NULL,
    summary TEXT NOT NULL
);
CREATE TABLE book_names(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
   title TEXT NOT NULL,
   subtitle TEXT NOT NULL, 
   author TEXT NOT NULL,
    page_count INTEGER,
    isbn TEXT NOT NULL
);

