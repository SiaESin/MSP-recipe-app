import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express()

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://siabhons:Ywz6WC2UAGMzXvbp@recipes.ek7x2jb.mongodb.net/Recipes?retryWrites=true&w=majority");
app.listen(3001, () => console.log('Server running!'))