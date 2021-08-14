import request from './request';
export function getYopBanners() {
  return request({
    url: '/banner',
  });
}
