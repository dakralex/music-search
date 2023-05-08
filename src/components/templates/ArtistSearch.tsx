import React, {useEffect, useState} from 'react';
import useDebounce from '../../hooks/useDebounce';
import ArtistSearchBar from '../molecules/ArtistSearchBar';
import {LazyQueryTrigger} from '@reduxjs/toolkit/dist/query/react/buildHooks';

type ArtistSearchProps = {
  initialSearchValue: string;
  loadSearch: LazyQueryTrigger<any>;
};

const ArtistSearch = ({initialSearchValue, loadSearch}: ArtistSearchProps) => {
  const [search, setSearch] = useState<string>(initialSearchValue);

  // TODO: Refactor so musicbrainzApi sequences API calls to one request per second
  const searchValue = useDebounce(search, 1000);

  useEffect(() => {
    setSearch(initialSearchValue);
  }, [initialSearchValue]);

  useEffect(() => {
    if (searchValue === '' || searchValue.length < 3) {
      return;
    }

    loadSearch(searchValue);
  }, [loadSearch, searchValue]);

  const submitSearch = () => {
    loadSearch(searchValue);
  };

  return (
    <ArtistSearchBar
      searchValue={search}
      setSearchValue={setSearch}
      submitSearch={submitSearch}
    />
  );
};

export default ArtistSearch;
