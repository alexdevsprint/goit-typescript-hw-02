export interface Image {
  id: string;
  alt_description: string;
  urls: {
    small: string;
    regular: string;    
  };  
}

export interface apiResponse {
  total_pages: number;
  results: Image[];
}