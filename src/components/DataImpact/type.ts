export interface DataImpactProps {
  username: string;
  challenge_name: string;
  email: string;
  impact_point: number;
  helps: {
    impact_category: {
      name: string;
      image_url: string;
    }
  }[]
}