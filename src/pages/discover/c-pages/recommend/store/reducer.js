import { CHANGE_TOP_BANNERS, CHANGE_HOT_RECOMMEND } from './constants';
import { Map } from 'immutable';
const defaultState = Map({
  topBanners: [],
  hotRecommends: [],
});
function reducer(state = defaultState, action) {
  switch (action.type) {
    case CHANGE_TOP_BANNERS:
      // return { ...state, topBanners: action.topBanners };
      return state.set('topBanners', action.topBanners); //set会返回一个新的对象
    case CHANGE_HOT_RECOMMEND:
      return state.set('hotRecommends', action.hotRecommends);
    default:
      return state;
  }
}
export default reducer;
