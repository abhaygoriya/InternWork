const API_URL = "http://localhost:3000/books"; // Replace with your backend URL
const addButton = document.getElementById("add-button");

// Function to fetch and display the books
const fetchBooks = async () => {
  const response = await fetch(API_URL);
  const books = await response.json();
  const bookList = document.getElementById("book-list");
  bookList.innerHTML = "";
  books.forEach((book) => {
    const tr = document.createElement("tr");
    tr.setAttribute("id", book.id);
    const bookID = book.id;
    tr.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.year}</td>
        <td>
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
        </td>
    `;
    bookList.appendChild(tr);
    const editButton = tr.querySelector(".edit-btn");
    const deleteButton = tr.querySelector(".delete-btn");
    editButton.addEventListener("click", () => {
      editBook(bookID);
    });
    deleteButton.addEventListener("click", () => {
      deleteBook(bookID);
    });
  });
};

// Function to create a new book

const createBook = async (book) => {
  console.log("called");
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(book),
  });
  const newBook = await response.json();
  fetchBooks(); // Refresh the list
  addButton.innerHTML = "Add Book";
};

// Function to edit a book
const editBook = (id) => {
  addButton.innerHTML = "Edit Book";
  const row = document.getElementById(id);
  const title = row.cells[0].innerText;
  const author = row.cells[1].innerText;
  const year = row.cells[2].innerText;

  document.getElementById("book-title").value = title;
  document.getElementById("book-author").value = author;
  document.getElementById("book-year").value = year;

  // Change the button to "Update"
  addButton.innerText = "Update Book";
  addButton.onclick = () => updateBook(id);
};

// Function to update a book
const updateBook = async (id) => {
  console.log("id", id);
  const updatedBook = {
    title: document.getElementById("book-title").value,
    author: document.getElementById("book-author").value,
    year: document.getElementById("book-year").value,
  };

  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedBook),
  });

  await response.json();
  fetchBooks(); // Refresh the list
  document.getElementById("book-form").reset(); // Clear the form fields
  addButton.innerHTML = "Add Book";
};

// Function to delete a book
const deleteBook = async (id) => {
  await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  fetchBooks(); // Refresh the list
};

// // Event listener for adding a new book
// document.getElementById("book-form").addEventListener("submit", (e) => {
//   e.preventDefault();

//   const newBook = {
//     title: document.getElementById("book-title").value,
//     author: document.getElementById("book-author").value,
//     year: document.getElementById("book-year").value,
//   };

//   createBook(newBook); // Create the book
//   document.getElementById("book-form").reset(); // Clear the form
// });

// Fetch the books on page load
fetchBooks();

addButton.addEventListener("click", (event) => {
  event.preventDefault();
  const title = document.getElementById("book-title").value;
  const author = document.getElementById("book-author").value;
  const year = document.getElementById("book-year").value;

  const book = {
    title: title,
    author: author,
    year: year,
  };
  addButton.innerHTML == "Add Book" ? createBook(book) : null;
});
