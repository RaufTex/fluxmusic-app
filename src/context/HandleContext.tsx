import { createContext, useState, useContext } from 'react';
import { ReactNode } from 'react';
import { IHandle } from '../interfaces/HandleInterface';

type HandleProviderProps = {
  children: ReactNode;
};

export const HandleContext = createContext({} as IHandle);

export function HandleProvider({ children }: HandleProviderProps) {
  const [openSelect, setOpenSelect] = useState<boolean>(false);
  const [openSelectArtist, setOpenSelectArtist] = useState<boolean>(false);
  const [openSelectAlbum, setOpenSelectAlbum] = useState<boolean>(false);
  const [openInitial, setOpenInitial] = useState<boolean>(true);

  function handleSelect(param: boolean) {
    setOpenSelect(param);
  }

  function handleSelectArtist(param: boolean) {
    setOpenSelectArtist(param);
  }

  function handleSelectAlbum(param: boolean) {
    setOpenSelectAlbum(param);
  }

  function handleOpenInitial(param: boolean) {
    setOpenInitial(param);
  }

  return (
    <HandleContext.Provider
      value={{
        openSelect,
        handleSelect,
        openSelectArtist,
        handleSelectArtist,
        openSelectAlbum,
        handleSelectAlbum,
        openInitial,
        handleOpenInitial,
      }}
    >
      {children}
    </HandleContext.Provider>
  );
}

export const useHandleContext = () => {
  return useContext(HandleContext);
};
