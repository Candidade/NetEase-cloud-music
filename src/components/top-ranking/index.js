import React, { memo } from 'react';

import { getSizeImage } from '@/utils/format-utils';

import { TopRankingWrapper } from './style';
export default memo(function CDTopRanking(props) {
  const info = props;
  const { tracks = [] } = info.info;
  return (
    <TopRankingWrapper>
      <div className="header">
        <div className="image">
          <img src={getSizeImage(info.info.coverImgUrl)} alt="" />
          <a href=":javascript" className="image_cover">
            {' '}
          </a>
        </div>
        <div className="info">
          <a href=":javascript">{info.info.name}</a>
          <div>
            <button className="btn play sprite_02"></button>
            <button className="btn favor sprite_02"></button>
          </div>
        </div>
      </div>

      <ul className="list">
        {tracks.slice(0, 10).map((item, index) => {
          return (
            <li key={item.id} className="list-item">
              <div className="rank">{index + 1}</div>
              <div className="info">
                <a href=":javascript" className="name text-nowrap">
                  {item.name}
                </a>
                <div className="operate">
                  <button className="btn sprite_02 play"></button>
                  <button className="btn sprite_02 addto"></button>
                  <button className="btn sprite_02 favor"></button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="footer">
        <a href=":javascript">查看全部 &gt;</a>
      </div>
    </TopRankingWrapper>
  );
});
