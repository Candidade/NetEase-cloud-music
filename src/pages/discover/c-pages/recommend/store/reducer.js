import { CHANGE_TOP_BANNERS } from './constants';
import { fromJS, Map } from 'immutable';
const defaultState = Map({
  topBanners: [],
});
function reducer(state = defaultState, action) {
  switch (action.type) {
    case CHANGE_TOP_BANNERS:
      // return { ...state, topBanners: action.topBanners };
      return state.set('topBanners', action.topBanners); //set会返回一个新的对象
    default:
      return state;
  }
}
export default reducer;
