import React, { memo } from 'react';

import { getSizeImage } from '@/utils/format-utils';
import { AlbumWrapper } from './style';

export default memo(function CDAlbumCover(props) {
  const { info, size = 130, width = 153, bag = '-845px' } = props;
  return (
    <AlbumWrapper size={size} width={width} bag={bag}>
      <div className="album-image">
        <img src={getSizeImage(info.picUrl, size)} alt="" />
        <a href=":javascript" className="cover image_cover">
          {' '}
        </a>
      </div>
      <div className="album-info">
        <div className="name text-nowrap">{info.name}</div>
        <div className="artist text-nowrap">{info.artist.name}</div>
      </div>
    </AlbumWrapper>
  );
});
