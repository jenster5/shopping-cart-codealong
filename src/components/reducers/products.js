import { createSlice } from '@reduxjs/toolkit'

const productData =[
    { id: 1, title: 'Socks', price: 100, emoji: ':socks:'},
    { id: 2, title: 'T-shirt', price: 200, emoji: ':shirt:'},
    { id: 3, title: 'Pants', price: 350, emoji: ':dress:'},
    { id: 4, title: 'Dress', price: 550, emoji: ':jeans:'},
]


export const products = createSlice({
    name: 'products',
    initialState: productData
})