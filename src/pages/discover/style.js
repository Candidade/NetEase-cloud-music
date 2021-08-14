import styled from 'styled-components'
export const DiscoverWrapper=styled.div`
.top{
  height: 30px;
  background:#c20c0c;
}
`
export const TopMenu=styled.div`
position: relative;
display:flex;
padding-left:180px;
top:-4px;

.item{
  a {
      display: inline-block;
      height: 20px;
      line-height: 20px;
      padding: 0 13px;
      margin: 7px 17px 0;
      color: #fff;

      &:hover, &.active {
        text-decoration: none;
        background-color: #9B0909;
        border-radius: 20px;
      }
   }
}
`