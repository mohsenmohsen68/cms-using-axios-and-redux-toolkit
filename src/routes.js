import Articles from './pages/articles/Articles'
import Courses from './pages/courses/Courses'
import Information from './pages/information/Information'
import Users from './pages/users/Users'

const routes = [
    {path:'/', element:<Users/>},
    {path:'/users', element:<Users/>},
    {path:'/information', element:<Information/>},
    {path:'/articles', element:<Articles/>},
    {path:'/courses', element:<Courses/>}
]

export default routes