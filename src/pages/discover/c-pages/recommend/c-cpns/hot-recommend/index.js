import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import CDThemeHeaderRCM from '@/components/theme-header-rcm';
import CDSongsCover from '@/components/songs-cover';

import { HotRecommendWrapper } from './style';
import { getHotRecommendAction } from '../../store/actionCreators';
export default memo(function CDHotRecommend() {
  // state

  // redux hooks
  const { hotRecommends } = useSelector(
    (state) => ({
      hotRecommends: state.getIn(['recommend', 'hotRecommends']),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHotRecommendAction(8));
  }, [dispatch]);
  return (
    <HotRecommendWrapper>
      <CDThemeHeaderRCM
        title="热门推荐"
        keywords={['华语', '流行', '民谣', '摇滚', '电子']}
      />
      <div className="recommend-list">
        {hotRecommends.map((item, index) => {
          return <CDSongsCover key={item.id} info={item}></CDSongsCover>;
        })}
      </div>
    </HotRecommendWrapper>
  );
});
