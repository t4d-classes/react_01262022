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

  const replaceItem = useCallback(async (item) => {
    await replace(item);
    await refreshItems();
  }, [replace, refreshItems]);

  const removeItem = useCallback(async (itemId) => {
    await remove(itemId);
    await refreshItems();
  }, [remove, refreshItems]);

  return [ items, refreshItems, appendItem, replaceItem, removeItem ];


};