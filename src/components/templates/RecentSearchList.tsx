import React from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../AppStore';
import Subtitle from '../atoms/Subtitle';
import SearchList from '../organisms/SearchList';

const RecentSearchList = () => {
  const recentSearchValues = useSelector((state: RootState) =>
    [...state.search.recentSearchValues].reverse(),
  );

  return recentSearchValues.length > 0 ? (
    <View>
      <Subtitle>Your recent searches</Subtitle>
      <SearchList items={recentSearchValues} />
    </View>
  ) : null;
};

export default RecentSearchList;
