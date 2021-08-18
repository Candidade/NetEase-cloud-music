import {
  CHANGE_TOP_BANNERS,
  CHANGE_HOT_RECOMMEND,
  CHANGE_NEW_ALBUM,
  CHANGE_UP_RANKING,
  CHANGE_NEW_RANKING,
  CHANGE_ORIGIN_RANKING,
} from './constants';

import {
  getTopBanners,
  getHotRecommends,
  getNewAlbums,
  getTopLists,
} from '@/sevices/recommend';

const changeTopBannerAction = (res) => ({
  type: CHANGE_TOP_BANNERS,
  topBanners: res.banners,
});
export const getTopBannerAction = () => {
  return (dispatch) => {
    getTopBanners().then((res) => {
      dispatch(changeTopBannerAction(res));
    });
  };
};

const changeHotRecommendAction = (res) => ({
  type: CHANGE_HOT_RECOMMEND,
  hotRecommends: res.result,
});
export const getHotRecommendAction = (limit) => {
  return (dispatch) => {
    getHotRecommends(limit).then((res) => {
      dispatch(changeHotRecommendAction(res));
    });
  };
};

const changeNewAlbumAction = (res) => ({
  type: CHANGE_NEW_ALBUM,
  newAlbums: res.albums,
});
export const getNewAlbumAction = (limit) => {
  return (dispatch) => {
    getNewAlbums(limit).then((res) => {
      dispatch(changeNewAlbumAction(res));
    });
  };
};

const changeUpRankingAction = (res) => ({
  type: CHANGE_UP_RANKING,
  upRanking: res.playlist,
});
const changeNewRankingAction = (res) => ({
  type: CHANGE_NEW_RANKING,
  newRanking: res.playlist,
});
const changeOriginRankingAction = (res) => ({
  type: CHANGE_ORIGIN_RANKING,
  originRanking: res.playlist,
});

export const getTopListsAction = (idx) => {
  return (dispatch) => {
    getTopLists(idx).then((res) => {
      switch (idx) {
        case 0:
          dispatch(changeUpRankingAction(res));
          break;
        case 2:
          dispatch(changeNewRankingAction(res));
          break;
        case 3:
          dispatch(changeOriginRankingAction(res));
          break;

        default:
          break;
      }
    });
  };
};
