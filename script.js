const loginBtn = document.querySelector("#login-btn");
const addBook = document.getElementById("add-books");

//Add book names manually
const ikigai = new Book("Ikigai","Hector Garcia", 192, false);
const flashPoint = new Book("FlashPoint", "Geoff Johns", 176, true)

let myLibrary = [ikigai, flashPoint]; //Books library


function Book(name, author, pages, read = false){
    this.name =  name,
    this.author = author,
    this.pages =pages,
    this.read = read
}

function addToLibrary (){
    
}
