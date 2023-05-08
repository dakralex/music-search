import React, {useEffect, useState} from 'react';
import useDebounce from '../../hooks/useDebounce';
import {useTrigger} from '../../hooks/useTrigger';
import ArtistSearchBar from '../molecules/ArtistSearchBar';
import {LazyQueryTrigger} from '@reduxjs/toolkit/dist/query/react/buildHooks';

type ArtistSearchProps = {
  initialSearchValue: string;
  loadSearch: LazyQueryTrigger<any>;
};

const shouldSearch = (searchValue: string) =>
  searchValue !== '' && searchValue.length > 3;

const ArtistSearch = ({initialSearchValue, loadSearch}: ArtistSearchProps) => {
  const [searchValue, setSearchValue] = useState<string>(initialSearchValue);
  const triggerSearch = useTrigger(() => {
    loadSearch(searchValue, false);
  });

  useEffect(() => {
    setSearchValue(initialSearchValue);
  }, [initialSearchValue]);

  // TODO: Refactor so musicbrainzApi sequences API calls to one request per second
  const debouncedSearchValue = useDebounce(searchValue, 1000);

  useEffect(() => {
    if (shouldSearch(debouncedSearchValue)) {
      triggerSearch();
    }
  }, [initialSearchValue, debouncedSearchValue]);

  useEffect(() => {
    if (shouldSearch(searchValue)) {
      loadSearch(searchValue);
    }
  }, [loadSearch, searchValue]);

  const submitSearch = () => {
    if (shouldSearch(searchValue)) {
      triggerSearch();
    }
  };

  return (
    <ArtistSearchBar
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      submitSearch={submitSearch}
    />
  );
};

export default ArtistSearch;
