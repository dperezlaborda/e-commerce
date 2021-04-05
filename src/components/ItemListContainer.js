import React from 'react';
import ItemList from './ItemList';
import botta from '../images/botta.jpg';
import kari from '../images/kari.jpg';
import ryl from '../images/ryl.jpg';
import lambert from '../images/lambert.jpg';
import pham from '../images/pham.jpg';
import james from '../images/james.jpg';
import mirror from '../images/mirror.jpg';
import jar from '../images/jar.jpg';
import helvetica from '../images/helvetica.jpg';

const products = [
    {
        category: "sillas",
        id: "1",
        title: "Silla Botta",
        price: 2500,
        picture: botta
    },
    {
        category: "sillas",
        id: "2",
        title: "Silla Kari",
        price: 2500,
        picture: kari
    },
    {
        category: "sillas",
        id: "3",
        title: "Silla Ryl",
        price: 2500,
        picture: ryl
    },
    {
        category: "escritorios",
        id: "4",
        title: "Escritorio Lambert",
        price: 5000,
        picture: lambert
    },
    {
        category: "escritorios",
        id: "5",
        title: "Escritorio Pham",
        price: 4000,
        picture: pham
    },
    {
        category: "escritorios",
        id: "6",
        title: "Escritorio James",
        price: 3100,
        picture: james
    },
    {
        category: "deco",
        id: "7",
        title: "Espejo Giorgio",
        price: 5000,
        picture: mirror
    },
    {
        category: "deco",
        id: "8",
        title: "Florero Victoria",
        price: 2000,
        picture: jar
    },
    {
        category: "deco",
        id: "9",
        title: "Cuadro Helvetica",
        price: 2500,
        picture: helvetica
    },
]

const ItemListContainer = () => {
    return (
        <div>
            <ItemList />
        </div>
    )
}

export default ItemListContainer;
