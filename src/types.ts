export interface Image {
  id: string;
  alt_description: string | null;
  urls: {
    small: string;
    regular: string;    
  };  
}

export interface ApiResponse {
  total_pages: number;
  results: Image[];
}