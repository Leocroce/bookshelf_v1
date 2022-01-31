export interface Direito {
  id: number;
  titulo: string;
  autor: string;
  img: string;
  link: [{ ref: string, texto: string }];
  cols: number;
  rows: number;
}
