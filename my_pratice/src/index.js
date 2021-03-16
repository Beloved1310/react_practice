import React from 'react';
import ReactDom from 'react-dom';
import { FaBeer, FaLeanpub } from 'react-icons/fa';


import './index.css'


const book = [
    {
        img:'https://images-na.ssl-images-amazon.com/images/I/91surQ0DOmL._AC_UL200_SR200,200_.jpg',
        title:'The Pegan Diet',
        author : 'Dr Mark',
    },

    {
        img:'https://images-na.ssl-images-amazon.com/images/I/81AerL3iNML._AC_UL200_SR200,200_.jpg',
        title:'Flavcitys 5 Ingredient Meals',
        author : 'Bobby Parrish',
    },

    {
        img:'https://images-na.ssl-images-amazon.com/images/I/81uSFmghbZL._AC_UL200_SR200,200_.jpg',
        title:'The Step-by-Step Instant Pot Cookbook',
        author : 'Jeffrey Eisner (Author)',
    },

    {
        img:'https://images-na.ssl-images-amazon.com/images/I/9103aOGnHAL._AC_UL200_SR200,200_.jpg',
        title:'jewish',
        author : 'Jake Cohen',
    },

    {
        img:'https://images-na.ssl-images-amazon.com/images/I/81wss9n7pwL._AC_UL200_SR200,200_.jpg',
        title:'Un Do It',
        author : 'Dean Ornish',
    },

    {
        img:'https://images-na.ssl-images-amazon.com/images/I/81PxN0B7CmL._AC_UL200_SR200,200_.jpg',
        title:'Magnolia Table',
        author : 'Joanna Gaines',
    },

    
];

function BookList() {
    return (
        <section>
        <h1 className = 'title'>BOOK LIST</h1>
        <div className = 'booklist'>
            {book.map((book) => {
            const {img, title, author} = book;
             return <Book book = {book}></Book>;
            })}
        </div>
        </section>
    );
}

const Book = (props) =>{
    console.log(props);
    const {img, title, author} = props.book;

    return(
        <article className = 'book'>
            <h1 className = 'font'><FaLeanpub /></h1>
            <img src = {img} alt = ''/>
            <h2>{title}</h2>
            <h4>{author}</h4>
        </article>
    );

};

ReactDom.render(<BookList/>, document.getElementById ('root'));