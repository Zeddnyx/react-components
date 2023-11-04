export interface ICard {
  title: string;
  image: string;
  description: string;
  slug: string;
  date?: string;
  user?: {
    name: string;
    image: string;
  }
}
