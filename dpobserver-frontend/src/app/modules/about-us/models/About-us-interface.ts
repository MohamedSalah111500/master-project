export interface AboutUs {
  footerDescription?: string;
  footerImageData?: string;
  footerImageId?: number;
  footerTitle?: string;
  footerImageUrl?: string;
  headerImages?: [sliderImages];
  headerTitle?: string;
  middleImages?: [sliderImages];
  imageUrl?: string;
  mission?: string;
  sliderImages?: [sliderImages];
  vision?: string;
  whatWeSell?: string;
  whyChooseUS?: string;
}

export interface sliderImages {
  imageId?: number;
  imageDescription?: string;
  imageData?: string;
  imageUrl?: string;
}
