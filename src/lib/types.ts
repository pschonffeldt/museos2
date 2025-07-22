// One for each row of data I want to bring to my app.
// If I happen to add new rows, and if I want to use it on my app, I need to add it to this list and set the type

export interface MuseumRecord {
  id: number;
  created_at: string;
  museum_name: string;
  museum_country: string;
  museum_region: string;
  museum_city: string;
  museum_municipality: string;
  museum_address: string;
  museum_ownership_type: string;
  museum_collections: string;
  museum_director: string;
  museum_opening_hours: string;
  museum_parking: boolean;
  museum_public_transpot: string;
  museum_website: string;
  museum_description: string;
  museum_collections_description: string;
  museum_complete: boolean;
  museum_directions: string;
  museum_space_description: string;
  museum_pricingstyle: string;
  museum_price: string;
  museum_discount_availability: string;
  museum_discounts: string;
  museum_transport_type: string;
  museum_map_url: string;
  museum_transport_line: string;
}
