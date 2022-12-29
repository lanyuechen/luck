import produce from 'immer';
import _ from 'lodash';

export const immerUpdate = (data, path, value) => {
  return produce(data, draft => {
    _.set(draft, path, value);
  });
}
