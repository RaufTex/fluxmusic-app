import { createContext, useState, useContext } from 'react';
import { ReactNode } from 'react';
import { IHandleNews } from '../interfaces/HandleNews';

type HandleNewsProviderProps = {
  children: ReactNode;
};

export const HandleNewsContext = createContext({} as IHandleNews);

export function HandleNewsProvider({ children }: HandleNewsProviderProps) {
  const [openNews, setOpenNews] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openAlbums, setOpenAlbums] = useState<boolean>(false);
  const [openArtists, setOpenArtists] = useState<boolean>(false);

  function handleNews(param: boolean) {
    setOpenNews(param);
  }

  function handleModal(param: boolean) {
    setOpenModal(param);
  }

  function handleOpenAlbums(param: boolean) {
    setOpenAlbums(param);
  }

  function handleOpenArtists(param: boolean) {
    setOpenArtists(param);
  }

  return (
    <HandleNewsContext.Provider
      value={{
        openNews,
        handleNews,
        openModal,
        handleModal,
        openAlbums,
        handleOpenAlbums,
        openArtists,
        handleOpenArtists,
      }}
    >
      {children}
    </HandleNewsContext.Provider>
  );
}

export const useHandleNewsContext = () => {
  return useContext(HandleNewsContext);
};
