import React from 'react'

const Book = ({book}) => {
    return (
        <div>
            <h2>Title: {book.title} </h2>
        </div>
    );
};
// outputting list
const Booklists = () => {
    const books = [
    { id: 1, title: "Oliver Twist" },
    { id: 2, title: "Animal Fram" },
    { id: 3, title: "Macbeth" },
    { id: 4, title: "Suger Girl" },
    { id: 5, title: "Without A Sliver Spoon" },
];
return (
<div>
    <h3>Bestselling books</h3>
    {books.map((book) => {
    return <Book key={book.id} book={book} />   
    })}
</div>
);
};

export default Booklists
