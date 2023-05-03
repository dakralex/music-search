import React from 'react';
import Star from './star.svg';
import House from './house.svg';
import Search from './search.svg';
import StarFilled from './star-fill.svg';
import HouseFilled from './house-door-fill.svg';

type IconProps = {
  focused: boolean;
  color: string;
  size: number;
};

type SvgSize = {
  width: number;
  height: number;
};

const transformSizeToProps = (size: number): SvgSize => {
  return {width: size, height: size};
};

export const HomeIcon = ({focused, color, size}: IconProps): JSX.Element => {
  if (focused) {
    return <HouseFilled fill={color} {...transformSizeToProps(size)} />;
  }

  return <House fill={color} {...transformSizeToProps(size)} />;
};

export const SearchIcon = ({color, size}: IconProps): JSX.Element => {
  return <Search fill={color} {...transformSizeToProps(size)} />;
};

export const FavoritesIcon = ({focused, color, size}: IconProps): JSX.Element => {
  if (focused) {
    return <StarFilled fill={color} {...transformSizeToProps(size)} />;
  }

  return <Star {...transformSizeToProps(size)} />;
};
