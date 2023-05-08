import React from 'react';
import LoadingSpinner from '../atoms/LoadingSpinner';
import ArtistList, {IArtistList} from '../organisms/ArtistList';

type ArtistSearchResultListProps = {
  artists?: IArtistList;
  isLoading: boolean;
};
const ArtistSearchResultList = ({
  artists,
  isLoading,
}: ArtistSearchResultListProps) => {
  return isLoading ? <LoadingSpinner /> : <ArtistList artists={artists} />;
};

export default ArtistSearchResultList;
