export interface IGender {
  code: number;
  id: number;
  name: string;
}

export interface IArtist {
  id: number;
  name: string;
  firstname: string;
  lastname: string;
}
export interface INews {
  date: string;
  id: number;
  title: string;
  content: string;
  url: string;
  writer: string;
}

export interface IAlbums {
  id: number;
  label: string;
  title: string;
}
export interface IData {
  item: IArtist[];
}

export interface IResults {
  albums: IAlbums[];
  genders: IGender[];
  news: INews[];
  artist: IArtist[];
  getGenders: (params: IGender[]) => void;
  getAlbums: (params: IAlbums[]) => void;
  getNews: (params: INews[]) => void;
  getArtist: (params: IArtist[]) => void;
  openSelect: boolean;
  handleSelect: (param: boolean) => void;
}
