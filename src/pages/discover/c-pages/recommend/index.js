import React, { memo, useEffect } from 'react';
import { connect, useDispatch, useSelector, shallowEqual } from 'react-redux';
import { getTopBannerAction } from './store/actionCreators';
function CDRecommend(props) {
  //  组件和redux关联,获取数据进行操作
  const { topBanners } = useSelector(
    (state) => ({
      // topBanners: state.get('recommend').get('topBanners'),
      topBanners: state.getIn(['recommend', 'topBanners']),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  // 发送网络请求
  useEffect(() => {
    dispatch(getTopBannerAction());
  }, [dispatch]);
  return (
    <div>
      <h2>CDRecommen{topBanners.length}</h2>
    </div>
  );
}

export default memo(CDRecommend);

// function CDRecommend(props) {
//   const { getBanners, topBanners } = props;

//   useEffect(() => {
//     getBanners();
//   }, [getBanners]);
//   return (
//     <div>
//       <h2>CDRecommen{topBanners.length}</h2>
//     </div>
//   );
// }
// const mapStateToProps = (state) => ({
//   topBanners: state.recommend.topBanners,
// });
// const mapDispathToProps = (dispath) => ({
//   getBanners: () => {
//     dispath(getTopBannerAction());
//   },
// });
// export default connect(mapStateToProps, mapDispathToProps)(memo(CDRecommend));
