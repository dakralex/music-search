import React from 'react';
import Paragraph from '../atoms/Paragraph';
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
  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <ArtistList
      artists={artists}
      noItemsComponent={
        <Paragraph>No artists were found with this search term.</Paragraph>
      }
    />
  );
};

export default ArtistSearchResultList;
