import { useHandleContext } from '../context/HandleContext';
import { useHandleNewsContext } from '../context/HandleNewsContext';

export default function InitialScreen() {
  const { handleOpenInitial, openSelect, openSelectAlbum, openSelectArtist } =
    useHandleContext();
  const { openNews, openAlbums, openModal, openArtists } =
    useHandleNewsContext();

  if (
    openSelect === false &&
    openNews === false &&
    openSelectAlbum === false &&
    openSelectArtist === false &&
    openAlbums === false &&
    openModal === false &&
    openArtists === false
  ) {
    handleOpenInitial(true);
  }
  return <></>;
}
