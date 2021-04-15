import * as React from 'react';
import { useEffect } from 'react';
import { Text } from 'react-native';
import { CategoryObject, PlaylistObjectSimplified } from 'types/spotify';
import CategoryList from '../../components/home/CategoryList';
import { useSelector, useDispatch } from 'react-redux';
import {
  homeCategoryPlayListSelector,
  homeSelectedCategorySelector,
} from '../../slice/main/homeSlice';
import { getHomeCategoryPlayList } from '../../slice/main/homeThunk';
import VerticalItemList from '../../components/common/VerticalItemList';
interface Props {
  categories: CategoryObject[];
}

const CategoryContainer = ({ categories }: Props) => {
  const categoryPlayList = useSelector(homeCategoryPlayListSelector);
  const selectedCategoryId = useSelector(homeSelectedCategorySelector);
  const dispatch = useDispatch();
  const onSelectCategory = (id: string) => {
    dispatch(getHomeCategoryPlayList(id));
  };

  useEffect(() => {
    categories[0] && dispatch(getHomeCategoryPlayList(categories[0].id));
  }, [categories]);

  const onSelect = (item: PlaylistObjectSimplified) => {
    console.log(item);
  };

  return (
    <>
      <CategoryList
        items={categories}
        selectedId={selectedCategoryId}
        onSelect={onSelectCategory}
      />
      <VerticalItemList<PlaylistObjectSimplified>
        items={categoryPlayList[selectedCategoryId]}
        onSelect={onSelect}
        getItemContent={(item) => ({
          title: item.name,
          subtitle: item.description || 'No description',
          thumbnail: item.images[0].url,
          key: item.id,
        })}
      />
    </>
  );
};

export default CategoryContainer;
