import { useState } from "react";
import "./App.css";
import BookCard from "./components/BookCard";

function App() {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const searchBooks = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`https://openlibrary.org/search.json?title=${query}`);
      const data = await res.json();
      setBooks(data.docs.slice(0, 12));
    } catch {
      setError("Failed to fetch books. Try again.");
    }
    setLoading(false);
  };

  return (
    <div className="container">
      <h1>📚 Book Finder</h1>
      <form onSubmit={searchBooks} className="search-bar">
        <input
          type="text"
          placeholder="Enter book title..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}

      <div className="book-grid">
        {books.map((book, i) => (
          <BookCard key={i} book={book} />
        ))}
      </div>
    </div>
  );
}

export default App;
