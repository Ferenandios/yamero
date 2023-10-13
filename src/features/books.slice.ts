import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const initialState: IState = {
  books: [],
  filter: ['All', 'Relevance'], // ['category', 'sort by']
}

export const getBooks = createAsyncThunk('books/getBooks', async (action: PayloadAction<string>, { dispatch }) => {
  const url = `https://www.googleapis.com/books/v1/volumes?q=${action.payload}&print&key=AIzaSyAcnPzxDxJOMEIVdWzDsvmKXTiZKR37N3M`
  const res = await axios.get<Bookshelf[]>(url)
  dispatch(setBooks(res.data))
})

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setBooks: (state, action: PayloadAction<Bookshelf[]>) => {
      state.books = state.books.concat(action.payload)
      console.log(state.books);
      
    },
    changeCategory: (state, action: PayloadAction<string>) => {
      state.filter[0] = action.payload
    },
    changeSortBy: (state, action: PayloadAction<string>) => {
      state.filter[1] = action.payload
    }
  }
})

export default booksSlice.reducer
export const { setBooks, changeCategory, changeSortBy } = booksSlice.actions