export interface Sagas {
  id: number;
  titulo: string;
  autor: string;
  img: string;
  listaLivros: [];
  link: [{ ref: string, texto: string }];
  cols: number;
  rows: number;
}
