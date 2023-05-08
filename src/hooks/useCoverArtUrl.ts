import {useEffect, useState} from 'react';

export type IUseCoverArtUrl = string | null;

export type UseCoverArtUrl = {
  coverUrl: IUseCoverArtUrl;
  isLoading: boolean;
};

export type ICoverArtItem = {
  id: number | string;
  front: boolean;
  back: boolean;
  image: string;
  approved: boolean;
};

export type ICoverArtList = {
  images: Array<ICoverArtItem>;
};

/**
 * Return the url of the first album front cover that was marked as approved.
 * @param imagesArray response of coverartarchive API
 */
export const pickFirstFrontCover = (
  imagesArray?: ICoverArtList,
): IUseCoverArtUrl => {
  // Filter for approved front covers from the given array
  const filteredImages = (imagesArray?.images ?? []).filter(
    cover => cover.approved && cover.front,
  );

  // Return the first image of the filtered array
  return Object.values(filteredImages)?.[0]?.image || null;
};

/**
 * Returns the cover url from a given release group mbid.
 * @param mbid
 */
export const useCoverArtUrl = (mbid: string): UseCoverArtUrl => {
  const [isLoading, setLoading] = useState(true);
  const [cover, setCover] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        // Fetch the Cover Art Archive API for a release group's mbid
        const response = await fetch(
          `http://coverartarchive.org/release-group/${mbid}`,
          {
            headers: {
              Accept: 'application/json',
              Content: 'application/json',
              'User-Agent': 'MusicSearch/v1.0 ( dakral@protonmail.com )',
            },
          },
        );

        // First get JSON response and then pick the first album cover
        const responseJson: ICoverArtList = await response.json();
        setCover(pickFirstFrontCover(responseJson));
      } catch (error) {
        setCover(null);
      } finally {
        setLoading(false);
      }
    })();
  }, [mbid]);

  return {
    coverUrl: cover,
    isLoading: isLoading,
  };
};
