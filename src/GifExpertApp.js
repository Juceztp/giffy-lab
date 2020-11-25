import React, { useState } from 'react'
import { CategoryAdd } from './components/CategoryAdd';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = ({ defaultCategories = [] }) => {
    const [categories, setCategories] = useState(defaultCategories);
    return (
        <>
            <h2>GifExpertApp</h2>
            <hr />

            <CategoryAdd setCategories={ setCategories } />

            <ol>
                {
                    categories.map(category => {
                        return <GifGrid key={ category } category={ category } />
                    })
                }
            </ol>
        </>
    )
}
