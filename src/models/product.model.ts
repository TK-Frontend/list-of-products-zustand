export interface Product {
  id: number;
  name: string;
  year: number;
  color: string;
  pantone_value: string | number;
}

export interface ProductsData {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: Product[];
  support: Object;
}
// page":1,"per_page":6,"total":12,"total_pages":2,"data":[{
//id":1,"name":"cerulean","year":2000,"color":"#98B2D1","pantone_value":"15-4020"
