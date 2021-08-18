import React, { memo, useEffect, useRef } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { getNewAlbumAction } from '../../store/actionCreators';

import { Carousel } from 'antd';

import CDThemeHeaderRCM from '@/components/theme-header-rcm';
import CDAlbumCover from '@/components/album-cover';
import { AlbumWrapper } from './style';

export default memo(function CDNewAlbum() {
  // redux hooks
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return { newAlbums: state.getIn(['recommend', 'newAlbums']) };
  }, shallowEqual);

  const pageRef = useRef();
  useEffect(() => {
    dispatch(getNewAlbumAction(10));
  }, [dispatch]);
  return (
    <AlbumWrapper>
      <CDThemeHeaderRCM title="新碟上架" />
      <div className="content">
        <button
          className="arrow arrow-left sprite_02"
          onClick={(e) => pageRef.current.prev()}
        ></button>

        <div className="album">
          <Carousel dots={false} ref={pageRef}>
            {[0, 1].map((item) => {
              return (
                <div key={item} className="page">
                  {state.newAlbums
                    .slice(item * 5, (item + 1) * 5)
                    .map((iten, index) => {
                      return (
                        <CDAlbumCover
                          key={iten.name}
                          info={iten}
                          size={100}
                          width={118}
                          bag={'-570px'}
                        >
                          {iten.name}
                        </CDAlbumCover>
                      );
                    })}
                </div>
              );
            })}
          </Carousel>
        </div>

        <button
          className="arrow arrow-right sprite_02"
          onClick={(e) => pageRef.current.next()}
        ></button>
      </div>
    </AlbumWrapper>
  );
});
