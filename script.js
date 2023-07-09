const loginBtn = document.querySelector("#login-btn");
const addBook = document.getElementById("add-books");

const template = document.querySelector("template");
const cloneCard = template.content.cloneNode(true);
const bookName = cloneCard.getElementById("book-name");
const coverImage = cloneCard.getElementById("cover-image");
const pageNum = cloneCard.getElementById("page-num");
const authorName = cloneCard.getElementById("author");
const description = cloneCard.getElementById("description");

//Add book names manually
const ikigai = new Book("Ikigai","Hector Garcia", 192, false);
const flashPoint = new Book("FlashPoint", "Geoff Johns", 176, true, "./images/Flashpoint.avif")

let myLibrary = [ikigai, flashPoint]; //Books library

function Book(name, author, pages, read = false, cover){
    this.name =  name,
    this.author = author,
    this.pages =pages,
    this.read = read,
    this.cover = cover
    this.description = function (){
        return `${this.name} is written by ${this.author}, contains ${this.pages} no. of pages.`
    }
}

function addToLibrary (){
    
}
