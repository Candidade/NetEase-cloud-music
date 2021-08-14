import { Redirect } from 'react-router-dom'
import CDDiscover from '@/pages/discover'
import CDFriend from '@/pages/friend'
import CDMine from '@/pages/mine'

import CDRecommend from '../pages/discover/c-pages/recommend'
import CDRanklist from '../pages/discover/c-pages/ranklist'
import CDSonglist from '../pages/discover/c-pages/songlist'
import CDDjradio from '../pages/discover/c-pages/djradio'
import CDSinger from '../pages/discover/c-pages/singer'
import CDAlbum from '../pages/discover/c-pages/album'


const routes=[
  {
    path:"/",
    exact:true,
   render:()=>(<Redirect to='/discover'/>)
  },

  {
    path:"/discover",
   component:CDDiscover,
   routes:[
    {
      path: "/discover",
      exact: true,
      render: () => (
        <Redirect to="/discover/recommend"/>
      )
    },
    {
      path: "/discover/recommend",
      component: CDRecommend
    },
    {
      path: "/discover/ranking",
      component: CDRanklist
    },
    {
      path: "/discover/songslist",
      component: CDSonglist
    },
    {
      path: "/discover/djradio",
      exact: true,
      component: CDDjradio
    },
    {
      path: "/discover/Singer",
      component: CDSinger
    },
    {
      path: "/discover/album",
      component: CDAlbum
    }
   ]
  },
  {
    path:"/mine",
   component:CDMine
  },
  {
    path:"/friend",
   component:CDFriend
  }
]
export default routes