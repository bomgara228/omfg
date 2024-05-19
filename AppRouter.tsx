import { Route, Routes } from 'react-router-dom'
import { lazy } from 'react';

const Main = lazy(() => import('../../pages/Main/Main'))
const Home = lazy(() => import('../../pages/Home/Home'));
const Library = lazy(() => import('../../pages/Library/Library'));

export const AppRouter = () => (
    <main>
        <Routes>
            <Route path='/' element={<Main />}></Route>
            <Route path='/home' element={<Home />}></Route>
            <Route path='/library' element={<Library />}></Route>
            <Route path='*' element={<div>404</div>}></Route>
        </Routes>
    </main>
)