import React, { memo } from 'react'

import {headerLinks} from '@/common/local-data'
import { NavLink } from 'react-router-dom'
import {Input} from 'antd'
import {SearchOutlined} from '@ant-design/icons'
import {HeaderWrapper,HeaderLeft,HeaderRight} from './style'
 

export default memo(function CDAppHeader() {

  // 业务代码
const showSelectItem=(item,index)=>{
  if(index < 3){
    return (
      <NavLink exact to={item.link}>{item.title} <i className="sprite_01 icon"></i> </NavLink>
    )
  } else{
    return <a href={item.link}>{item.title}</a>
  }
}


// 返回的jsx
  return (
    <HeaderWrapper>
     <div className="content wrap-v1">
       <HeaderLeft>
        <a href="#/" className="logo sprite_01"> </a>
        <ul className="select-list">
          {
            headerLinks.map((item,index)=>{
              return (
                <li key={item.title} className="select-item"> {showSelectItem(item,index)} </li>
              )
            })
          }
        </ul>
       </HeaderLeft>
       <HeaderRight>
        <Input className="search" placeholder="音乐/视频/电台/用户" prefix={<SearchOutlined />}/>
        <div className="center">创作者中心</div>
        <button>登录</button>
       </HeaderRight>
     </div>
     <div className="divider"></div>
    </HeaderWrapper>
  )
})
