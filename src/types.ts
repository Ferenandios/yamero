export interface IState {
  books: Bookshelf[];
  filter: string[];
}

export type Bookshelf = {
  items: Book[];
  kind: "books#volumes";
  totalItems: number;
};

export type Book = {
  kind: "books#volume";
  id: string;
  volumeInfo: VolumeInfo;
};

export type ImageLinks = {
  smallThumbnail: string;
  thumbnail: string;
};

export type VolumeInfo = {
  description: string;
  imageLinks: ImageLinks;
  infoLink: string;
  language: "ru";
  pageCount: number;
  printType: string;
  publishedDate: string;
  publisher: string;
  title: string;
};

export interface CardProps {
  book: VolumeInfo;
}
export interface PreviewProps {
  imageLinks: ImageLinks;
}
export interface TextProps {
  props: TextObject;
}
interface TextObject {
  title: string;
  publisher: string;
}
