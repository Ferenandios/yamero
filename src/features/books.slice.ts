import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const initialState: IState = {
  books: [],
  filter: ['All', 'Relevance'], // ['category', 'sort by']
}

export const getBooks = createAsyncThunk('books/getBooks', async (_, { dispatch }) => {
  const url = `https://www.googleapis.com/books/v1/volumes?q=&print&key=yourAPIKey`
  const res: data = await axios.get(url)
  dispatch(setBooks(res.data))
})

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setBooks: (state, action: PayloadAction<Book[]>) => {
      state.books = state.books.concat(action.payload)
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