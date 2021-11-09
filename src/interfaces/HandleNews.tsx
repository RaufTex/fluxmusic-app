export interface IHandleNews {
  openNews: boolean;
  handleNews: (param: boolean) => void;
  openModal: boolean;
  handleModal: (param: boolean) => void;
  openAlbums: boolean;
  handleOpenAlbums: (param: boolean) => void;
  openArtists: boolean;
  handleOpenArtists: (param: boolean) => void;
}
