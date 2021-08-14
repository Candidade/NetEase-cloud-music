import styled from 'styled-components'
export const HeaderWrapper =styled.div`
height:75px;
background:#242424;
font-size:14px;
.content{
  height: 70px;
  /* background-color:#bfc; */
  display:flex;
  justify-content:space-between;
}
.divider{
  height:5px;
  background: #c20c20;
}
`

export const HeaderLeft=styled.div`
display:flex;
.logo{
  display: block;
  width: 176px;
  height: 69px;
  text-indent:-9999px;
  background-position:0 0;
}
.select-list{
  display:flex;
line-height:70px;
 .select-item{
  position: relative;
  a{
    display: block;
    padding:0 20px;
    color:#ccc;
   
   
  }
  :last-of-type a{
    position: relative;
    ::after{
      position: absolute;
      top:20px;
      right:-15px;
      width: 28px;
      height: 19px;
      background:url(${require('@/')})
    }
  }
   &:hover a,&.active a {
     color:#fff;
     background-color:#000;
     text-decoration:none
   }
   .active .icon {
        position: absolute;
        display: inline-block;
        width: 12px;
        height: 7px;
        bottom: -1px;
        left: 50%;
        transform: translate(-50%, 0);
        background-position: -226px 0;
      }
 }
}
`
export const HeaderRight=styled.div`
display:flex;
align-items:center;
font-size:12px;
color:#ccc;
.search{
  width: 158px;
  height: 32px;
  border-radius:16px;
  input{
    &::placeholder{
      font-size:12px;
    }
  }
}
.center{
  margin:0 16px;
  width: 90px;
  height: 32px;
  line-height:32px;
  text-align: center;
  border-radius:16px;
  border: 1px solid #002;
  background:transparent;
}
`