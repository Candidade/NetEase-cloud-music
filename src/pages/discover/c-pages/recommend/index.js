import React, { memo } from 'react';
import {
  RecommendWraper,
  Content,
  RecommendLeft,
  RecommendRight,
} from './style';
import CDTopBanner from './c-cpns/top-banner';
import HotRecommendWrapper from './c-cpns/hot-recommend';
import CDNewAlbum from './c-cpns/new-album';
import CDRecommendRanking from './c-cpns/recommend-ranking';
function CDRecommend() {
  return (
    <RecommendWraper>
      <CDTopBanner />
      <Content className="wrap-v2">
        <RecommendLeft>
          <HotRecommendWrapper />
          <CDNewAlbum />
          <CDRecommendRanking />
        </RecommendLeft>
        <RecommendRight></RecommendRight>
      </Content>
    </RecommendWraper>
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
