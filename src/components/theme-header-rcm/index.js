import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { HeaderWrapper } from './tytle';

const CDThemeHeaderRCM = memo(function (props) {
  const { title, keywords = [] } = props;
  return (
    <HeaderWrapper className="sprite_02">
      <div className="left">
        <h3 className="title">{title}</h3>
        <ul className="keyword">
          {keywords.map((item, index) => {
            return (
              <li className="item" key={item}>
                <a href=":javascript">{item}</a>
                <span className="divider">|</span>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="left">
        <a href=":javascript">更多</a>
        <i className="iocn sprite_02"></i>
      </div>
    </HeaderWrapper>
  );
});
CDThemeHeaderRCM.propTyoes = {
  title: PropTypes.string.isRequired,
  keywords: PropTypes.array,
};
// 设置默认值
CDThemeHeaderRCM.defaultProps = {
  keywords: [],
};
export default CDThemeHeaderRCM;
