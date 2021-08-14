import React, { memo, useEffect } from 'react';
import { connect } from 'react-redux';
import { getTopBannerAction } from './store/actionCreators';
function CDRecommend(props) {
  const { getBanners, topBanners } = props;

  useEffect(() => {
    getBanners();
  }, [getBanners]);
  return (
    <div>
      <h2>CDRecommen{topBanners.length}</h2>
    </div>
  );
}
const mapStateToProps = (state) => ({
  topBanners: state.recommend.topBanners,
});
const mapDispathToProps = (dispath) => ({
  getBanners: () => {
    dispath(getTopBannerAction());
  },
});
export default connect(mapStateToProps, mapDispathToProps)(memo(CDRecommend));
