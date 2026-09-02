import { createBrowserRouter } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Designs from './pages/Designs'
import Artists from './pages/Artists'
import ArtistDetail from './pages/ArtistDetail'
import Supports from './pages/Supports'
import SupportCategory from './pages/SupportCategory'
import SupportItem from './pages/SupportItem'
import Profile from './pages/Profile'
import RoomList from './pages/RoomList'
import RoomEditor from './pages/RoomEditor'
import MyInfo from './pages/MyInfo'
import Loyalty from './pages/Loyalty'
import Purchases from './pages/Purchases'
import Favorites from './pages/Favorites'


export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'designs', element: <Designs /> },
      { path: 'artistes', element: <Artists /> },
      { path: 'artistes/:name', element: <ArtistDetail /> },
      { path: 'supports', element: <Supports /> },
      { path: 'supports/:categoryId', element: <SupportCategory /> },
      { path: 'supports/:categoryId/:itemId', element: <SupportItem /> },
      { path: 'profil', element: <Profile /> },
      { path: 'profil/chez-moi', element: <RoomList /> },
      { path: 'profil/chez-moi/:roomId', element: <RoomEditor /> },
      { path: 'profil/infos', element: <MyInfo /> },
      { path: 'profil/fidelite', element: <Loyalty /> },
      { path: 'profil/achats', element: <Purchases /> },
      { path: 'profil/favoris', element: <Favorites /> },
    ],
  },
])