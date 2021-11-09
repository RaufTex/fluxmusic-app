import { useEffect } from 'react';
import api from '../services/api';
import { IAlbums, IArtist, INews } from '../interfaces/apiInterface';
import { useApiContext } from '../context/ApiContext';
import axios from 'axios';

export default function RequestComponent() {
  const { getAlbums, getGenders, getNews, getArtist } = useApiContext();

  function getData() {
    axios.defaults.headers.get['Content-Type'] =
      'application/json;charset=utf-8';
    axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';
    const reqRock = api.get('http://localhost:3000/1.json', {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods':
          'GET, POST, PUT, PATCH, POST, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    });
    const reqExpRock = api.get('http://localhost:3000/2.json', {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    });
    const reqClass = api.get('http://localhost:3000/28.json', {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    });
    const reqAlbumsRock = api.get<IAlbums[]>(
      'http://localhost:3000/1/albums.json',
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
    const reqNewsJazz = api.get<INews[]>('http://localhost:3000/21/news.json', {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    });
    const reqArtistRock = api.get<IArtist[]>(
      'http://localhost:3000/1/artists.json',
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      }
    );

    axios
      .all([
        reqRock,
        reqExpRock,
        reqClass,
        reqAlbumsRock,
        reqNewsJazz,
        reqArtistRock,
      ])
      .then(
        axios.spread((...responses) => {
          getGenders([
            {
              code: responses[0].data.code,
              id: responses[0].data.id,
              name: responses[0].data.name,
            },
            {
              code: responses[1].data.code,
              id: responses[1].data.id,
              name: responses[1].data.name,
            },
            {
              code: responses[2].data.code,
              id: responses[2].data.id,
              name: responses[2].data.name,
            },
          ]);
          getAlbums(responses[3].data.data);
          getNews(responses[4].data.data);
          getArtist(responses[5].data.data);
        })
      );
  }

  useEffect(() => {
    getData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <></>;
}
