export interface FAQ {
  frequentlyAskedQuestions?: string;
  questions?: [FaqQustion];
  section1ImageData?: string;
  section1ImageId?: number;
  section2ImageData?: string;
  section2ImageId?: number;
  section1ImageUrl?: string;
  section2ImageUrl?: string;
}

export interface FaqQustion {
  section?: number;
  question?: string;
  answer?: string;
}
