export interface IHandle {
  openSelect: boolean;
  handleSelect: (param: boolean) => void;
  openSelectArtist: boolean;
  handleSelectArtist: (param: boolean) => void;
  openSelectAlbum: boolean;
  handleSelectAlbum: (param: boolean) => void;
  openInitial: boolean;
  handleOpenInitial: (param: boolean) => void;
}
