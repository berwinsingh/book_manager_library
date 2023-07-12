const loginBtn = document.querySelector("#login-btn");
const addBook = document.getElementById("add-books");
const booksPlaceholder = document.querySelector(".book-card");

//Adding book names manually for testing
const ikigai = new Book("Ikigai","Hector Garcia", 192, false, "./images/pa joseph IKIGAI.jpeg");
const flashPoint = new Book("FlashPoint", "Geoff Johns", 176, true, "./images/Flashpoint.avif");
const supermanLegacy = new Book("Superman Legacy", "Karl Kesel", 64, false, "./images/Superman Legacy.jpg");

let myLibrary = [ikigai, flashPoint, supermanLegacy]; //All the books present

function Book(name, author, pages, read = false, cover){
    this.name =  name,
    this.author = author,
    this.pages = pages,
    this.read = read,
    this.cover = cover
    this.description = function (){
        return `${this.name} is written by ${this.author}, contains ${this.pages} no. of pages.`
    }
}

function addToLibrary (){
    for(let i=0;i<myLibrary.length;i++){
        const template = document.querySelector("template");
        const cloneCard = template.content.cloneNode(true);
        const bookName = cloneCard.getElementById("book-name");
        const coverImage = cloneCard.getElementById("cover-image");
        const pageNum = cloneCard.getElementById("page-num");
        const authorName = cloneCard.getElementById("author");
        const description = cloneCard.getElementById("description");
        
        let bookDetails = myLibrary[i]; //Looping through individual book names

        if(isAlreadyAdded(bookDetails)){ //Checking if the book already exists and 
            continue;
        }

        bookName.textContent = bookDetails.name;
        coverImage.setAttribute("src", `.${bookDetails.cover}`);
        pageNum.textContent = +bookDetails.pages;
        authorName.textContent = bookDetails.author;
        description.textContent = bookDetails.description();

        booksPlaceholder.appendChild(cloneCard);
    }
}

function isAlreadyAdded(book){
    for(let j=0;j<booksPlaceholder.children.length;j++){
        const books = booksPlaceholder.children[j];
        const title = books.querySelector("#book-name").textContent;
        const author = books.querySelector("#author").textContent;

        if(title===book.name && author===book.author){
            return true;
        }
    }
    return false;
}

//Popup for adding a new book
const newBookPop = document.getElementById("adding-new-book");
const submitNewBook = document.getElementById("book-submit");
const titleInput = document.getElementById("book-title");
const authorInput = document.getElementById("book-author");
const pageInput = document.getElementById("book-page");
const coverInput = document.getElementById("book-cover");

//Addind click function to show the popup
addBook.addEventListener("click",()=>{
    newBookPop.classList.remove("display");
    
    booksPlaceholder.classList.add("blur");
    booksPlaceholder.addEventListener("click",()=>{
        newBookPop.classList.add("display");
        booksPlaceholder.classList.remove("blur");
    });
    
    //Add a condition that if empty then submit won't work
    submitNewBook.addEventListener("click",()=>{
        const newBook = new Book(titleInput.value, authorInput.value, pageInput.value, coverInput.value);
        myLibrary.push(newBook);
        
        booksPlaceholder.classList.remove("blur");
        newBookPop.classList.add("display");
        addToLibrary();
    });
});

//Adding Delete Functionality
booksPlaceholder.addEventListener("click",(e)=>{
    let itemToRemove = e.target.closest(".card");
    booksPlaceholder.removeChild(itemToRemove); //Removes item from DOM
    myLibrary.pop(itemToRemove) //Removes item from Array
});