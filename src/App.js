import React from 'react';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import data from './data'

export default function App() {
    const cards = data.map(item => {
        return (
            <Card
            key = {item.id}
            item1 = {item}
            /> 
        )
    })    
    
    return (
        <div>
            <Navbar />
            <Hero />
            <section className='row'>
                {cards}
            </section>
        </div>
    )
}