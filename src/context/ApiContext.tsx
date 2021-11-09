import { createContext, useState, useContext } from 'react';
import { ReactNode } from 'react';

import {
  IAlbums,
  IArtist,
  INews,
  IGender,
  IResults,
} from '../interfaces/apiInterface';

type AlbumProviderProps = {
  children: ReactNode;
};

export const ApiContext = createContext({} as IResults);

export function ListUsersProvider({ children }: AlbumProviderProps) {
  const [albums, setAlbums] = useState<IAlbums[]>([]);
  const [genders, setGenders] = useState<IGender[]>([]);
  const [news, setNews] = useState<INews[]>([]);
  const [artist, setArtist] = useState<IArtist[]>([]);

  const [openSelect, setOpenSelect] = useState<boolean>(false);

  function getAlbums(params: IAlbums[]) {
    setAlbums(params);
  }

  function getGenders(params: IGender[]) {
    setGenders(params);
  }

  function getNews(params: INews[]) {
    setNews(params);
  }

  function getArtist(params: IArtist[]) {
    setArtist(params);
  }

  function handleSelect(param: boolean) {
    setOpenSelect(param);
  }

  return (
    <ApiContext.Provider
      value={{
        albums,
        getAlbums,
        genders,
        getGenders,
        news,
        getNews,
        openSelect,
        handleSelect,
        artist,
        getArtist,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
}

export const useApiContext = () => {
  return useContext(ApiContext);
};
