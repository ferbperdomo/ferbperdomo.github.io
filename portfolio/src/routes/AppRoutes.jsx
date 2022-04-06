import { Routes, Route } from 'react-router-dom'
import IndexPage from './../pages/IndexPage/IndexPage'
import WhoAmIPage from './../pages/WhoAmIPage/WhoAmIPage'

const AppRoutes = () => {

    return (
        <Routes>
            <Route path='/' element={<IndexPage />} />
            <Route path='/whoami' element={<WhoAmIPage />} />
        </Routes >
    )
}

export default AppRoutes