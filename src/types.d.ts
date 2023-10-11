interface IState {
  books: Book[]
  filter: string[]
}
type Book = {
  "kind": "books#bookshelf",
  "id": number,
  "selfLink": string,
  "title": string,
  "description": string,
  "access": string,
  "updated": Date,
  "created": Date,
  "volumeCount": number,
  "volumesLastUpdated": Date
}
interface IReducers {
  addBooks: (object, object) => void
}
type data = {
  data: Book[]
}