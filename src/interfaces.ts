export default interface ListingType {
  _id: string;
  name: string;
  hideListing: boolean;
  address?: string;
  price?: string;
  availability?: string;
  description?: string;
  size?: string;
  images?: [];
}
