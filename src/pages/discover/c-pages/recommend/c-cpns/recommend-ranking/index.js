import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import CDThemeHeaderRCM from '@/components/theme-header-rcm';
import CDTopRanking from '@/components/top-ranking';

import { getTopListsAction } from '../../store/actionCreators';
import { RecommendWrapper } from './style';
export default memo(function CDRecommendRanking() {
  const { upRanking, newRanking, originRanking } = useSelector(
    (state) => ({
      upRanking: state.getIn(['recommend', 'upRanking']),
      newRanking: state.getIn(['recommend', 'newRanking']),
      originRanking: state.getIn(['recommend', 'originRanking']),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTopListsAction(0));
    dispatch(getTopListsAction(2));
    dispatch(getTopListsAction(3));
  }, [dispatch]);
  return (
    <RecommendWrapper>
      <CDThemeHeaderRCM title="绑单" />
      <div className="tops">
        <CDTopRanking info={upRanking} />
        <CDTopRanking info={newRanking} />
        <CDTopRanking info={originRanking} />
      </div>
    </RecommendWrapper>
  );
});
