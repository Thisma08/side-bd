export interface Comic {
  id?: number;  // Optional because the server will generate this
  serie: string;
  title: string;
  numero: number;
  editeur: string;
}
