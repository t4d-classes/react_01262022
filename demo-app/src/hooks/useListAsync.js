import { useState, useCallback, useMemo } from 'react';

import { createApi } from '../services/apiData';


export const useListAsync = (resourceName) => {

  const { all, append, replace, remove } = useMemo(
    () => createApi(resourceName), [resourceName]);

  const [ items, setItems ] = useState([]);

  const refreshItems = useCallback(async () => {
    const items = await all();
    setItems(items);
  }, [all]);

  const appendItem = useCallback(async (item) => {
    await append(item);
    await refreshItems();
  }, [append, refreshItems]);

  const replaceItem = (item) => {
    const newItems = [...items];
    const itemIndex = items.findIndex(c => c.id === item.id);
    newItems[itemIndex] = item;
    setItems(newItems);
  };

  const removeItem = (itemId) => {
    setItems(items.filter(c =>c.id !== itemId));
  };

  return [ items, refreshItems, appendItem, replaceItem, removeItem ];


};