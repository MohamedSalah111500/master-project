export interface Product {
  id?: string;
  brand?: string;
  creationDate?: string;
  defualtImageData?: string;
  defualtImageId?: number;
  isDeleted?: boolean;
  deliveryDescription?: string;
  description?: string;
  imageContent?: number;
  defualtImageUrl?: string;
  imageId?: number;
  name?: string;
  price?: number;
  productCategoryId?: number;
  productImages?: [
    {
      imageUrl?: string;
      active?: boolean;
    }
  ];
  quantity?: number;
  sku?: string;
  specifications?: [{ title?: string; description?: string }];
  unitofMeasurement?: string;
  createdBy?: any;
  updatedBy?: any;
  updatedOn?: any;
  size?: number;
}
