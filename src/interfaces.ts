export default interface ListingType {
  _id: string;
  name: string;
  address?: string;
  price?: string;
  availability?: string;
  description?: string;
  size?: string;
  images?: [];
}
