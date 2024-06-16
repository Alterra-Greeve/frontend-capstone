interface DataImpactHelpsProps {
  impact_category: {
    name: string;
    image_url: string;
  }
}
export interface DataImpactProps {
  username: string;
  challenge_name: string;
  email: string;
  impact_point: number;
  helps: DataImpactHelpsProps[];
}

export interface DataImpactOrderProps {
  username: string;
  email: string;
  coin: number;
  qty: number;
  product_name: string;
  total: number;
  helps: DataImpactHelpsProps[];
  impact_point: number;
  createdAt: string;
  updatedAt: string;
}