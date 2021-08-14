import { CHANGE_TOP_BANNERS } from './constants';
import { getYopBanners } from '@/sevices/recommend';
const changeTopBannerAction = (res) => ({
  type: CHANGE_TOP_BANNERS,
  topBanners: res.banners,
});

export const getTopBannerAction = () => {
  return (dispatch) => {
    getYopBanners().then((res) => {
      dispatch(changeTopBannerAction(res));
    });
  };
};
