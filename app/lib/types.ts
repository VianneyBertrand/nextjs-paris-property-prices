export interface PropertyPriceData {
  date: string;
  averagePrice: number;
  totalTransactions: number;
  medianPrice: number;
}

export interface PropertyPricesByMonth {
  [key: string]: PropertyPriceData;
}

export interface DVFRecord {
  date_mutation: string;
  valeur_fonciere: string;
  code_postal: string;
  code_commune: string;
  type_local: string;
  surface_reelle_bati: string;
  nombre_pieces_principales: string;
}

export interface DistrictPriceData {
  district: string; // arrondissement
  averagePrice: number;
  medianPrice: number;
  totalTransactions: number;
  priceEvolution: number; // évolution en pourcentage sur la période
}

export interface ParisDistricts {
  [key: string]: DistrictPriceData;
}