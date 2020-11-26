import { useReducer, useEffect, useCallback } from 'react';

const CHECKED_CHANGE = 'CHECKED_CHANGE';
const CHECKED_ALL_CHANGE = 'CHECKED_ALL_CHANGE';
const SET_CHECKED_MAP = 'SET_CHECKED_MAP';

export const useChecked = (dataSource = [], {key = 'id'} = {}) => {
  const [checkedMap, dispatch] = useReducer((checkedMapParam, action) => {
    switch(action.type) {
      case CHECKED_CHANGE: {
        const { preload } = action;
        const { dataItem, checked } = preload;
        const { [key]: id } = dataItem;
        return Object.assign(
          {},
          checkedMapParam,
          { [id]: checked }
        )
      }
      case CHECKED_ALL_CHANGE: {
        const { preload: newCheckedAll } = action;
        const newCheckMap = {};
        if(newCheckedAll) {
          dataSource.forEach(data => {
            newCheckMap[data.id] = true;
          })
        }
        return newCheckMap;
      }
      case SET_CHECKED_MAP: {
        return action.prelaod
      }
      default: {
        return checkedMapParam;
      }
    }
  }, {});


  const onCheckedChange = (dataItem, checked) => {
    dispatch({
      type: CHECKED_CHANGE,
      preload: {
        dataItem,
        checked
      }
    })
  }

  const onCheckedAllChange = newCheckedAll => {
    dispatch({
      type: CHECKED_ALL_CHANGE,
      preload: newCheckedAll
    })
  }

  const onSetCheckedMap = checkedMap => {
    dispatch({
      type: SET_CHECKED_MAP,
      preload: checkedMap
    })
  }

  const filterChecked = useCallback((func = () => true) => {
    console.log(checkedMap);
    return Object.entries(checkedMap)
      .filter(entries => Boolean(entries[1]))
      .map(([checkedId]) => 
        dataSource.find(({[key]: id}) => id === Number(checkedId))
      )
      .filter(Boolean)
      .filter(func);
  }, [dataSource, checkedMap, key])

  useEffect(() => {
    let changed = false;
    let newCheckMap = {};
    Object.entries(checkedMap).forEach(([id]) => {
      if(!filterChecked().find(item => item.id === id)){
        changed = true;
      } else {
        newCheckMap[item.id] = true;
      }
    })

    if(changed) {
      dispatch({
        type: SET_CHECKED_MAP,
        prelaod: Object.assign({}, checkedMap)
      });
    }
  }, [dataSource]);

  const checkedAll = dataSource.length && (dataSource.length === filterChecked().length);

  return {
    checkedMap,
    onCheckedAllChange,
    onCheckedChange,
    onSetCheckedMap,
    filterChecked,
    checkedAll,
    dispatch
  }
}