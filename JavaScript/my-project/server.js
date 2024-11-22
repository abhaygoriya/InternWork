import express from "express";
import fs from "fs";
import path from "path";
import cors from "cors"; // Import the CORS middleware
import { log } from "console";

const app = express();
const PORT = 3000;

// Use the CORS middleware globally (allows all origins by default)
app.use(cors()); // Allows all origins by default

// Middleware to parse JSON requests
app.use(express.json());

// Using import.meta.url to get the current directory in ESModules
const __dirname = path.dirname(new URL(import.meta.url).pathname);

// Define the path to your books.json file
const booksFilePath = path.join(__dirname, "books.json");

// Helper functions to read and write the books data
const readBooksData = () => {
  const data = fs.readFileSync(booksFilePath, "utf-8");
  return JSON.parse(data);
};

const writeBooksData = (data) => {
  fs.writeFileSync(booksFilePath, JSON.stringify(data, null, 2));
};

// CRUD Operations

// CREATE: Add a new book
app.post("/books", (req, res) => {
  const books = readBooksData();
  const newBook = req.body;
  newBook.id = books.length ? books[books.length - 1].id + 1 : 1;
  books.push(newBook);
  writeBooksData(books);
  res.status(201).json(newBook);
});

// READ: Get all books
app.get("/books", (req, res) => {
  const books = readBooksData();
  res.json(books);
});

// READ: Get a specific book by ID
app.get("/books/:id", (req, res) => {
  const books = readBooksData();
  const book = books.find((b) => b.id === parseInt(req.params.id));
  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }
  res.json(book);
});

// UPDATE: Update an existing book by ID
app.put("/books/:id", (req, res) => {
  const books = readBooksData();
  const bookIndex = books.findIndex((b) => b.id === parseInt(req.params.id));
  if (bookIndex === -1) {
    return res.status(404).json({ message: "Book not found" });
  }
  const updatedBook = { ...books[bookIndex], ...req.body };
  books[bookIndex] = updatedBook;
  writeBooksData(books);
  res.json(updatedBook);
});

// DELETE: Delete a book by ID
app.delete("/books/:id", (req, res) => {
  const books = readBooksData();
  const bookIndex = books.findIndex((b) => b.id === parseInt(req.params.id));
  if (bookIndex === -1) {
    return res.status(404).json({ message: "Book not found" });
  }
  books.splice(bookIndex, 1);
  writeBooksData(books);
  res.status(204).send();
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
