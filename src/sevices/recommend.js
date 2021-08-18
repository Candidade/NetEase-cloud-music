import request from './request';

export function getTopBanners() {
  return request({
    url: '/banner',
  });
}
export function getHotRecommends(limit) {
  return request({
    url: '/personalized',
    params: {
      limit,
    },
  });
}
export function getNewAlbums(limit) {
  return request({
    // url: '/top/album?limit=10',
    url: '/top/album',
    params: {
      limit,
    },
  });
}
export function getTopLists(idx) {
  return request({
    url: '/top/list',
    params: {
      idx,
    },
  });
}
