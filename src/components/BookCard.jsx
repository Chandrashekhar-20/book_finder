export default function BookCard({ book }) {
  const coverId = book.cover_i;
  const coverUrl = coverId
    ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`
    : "https://via.placeholder.com/150x200?text=No+Cover";

  return (
    <div className="book-card">
      <img src={coverUrl} alt={book.title} />
      <div className="book-info">
        <h3>{book.title}</h3>
        <p>{book.author_name ? book.author_name.join(", ") : "Unknown Author"}</p>
        <p>First published: {book.first_publish_year || "N/A"}</p>
      </div>
    </div>
  );
}
