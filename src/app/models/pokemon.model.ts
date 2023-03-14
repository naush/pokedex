export interface PokedexResponse {
  description: any[];
  id: number;
  is_main_series: boolean;
  name: string;
  names: string[];
  pokemon_entries: any[];
  region: any;
  version_groups: any[];
}

export interface PokemonResponse {
  id: number;
  name: string;
  height: number;
  weight: number;
  stats: any;
  types: any[];
}

export class Pokemon {
  public readonly number: number;
  public readonly name: string;
  public readonly height?: number;
  public readonly weight?: number;
  public readonly stats?: any;
  public readonly types?: string[];
  public readonly favorite?: boolean;

  constructor(response: PokemonResponse) {
    this.number = response.id;
    this.name = response.name;
    this.height = response.height;
    this.weight = response.weight;
    this.stats = response.stats;
    this.types = response.types.map(t => t.type.name);
  }
}
