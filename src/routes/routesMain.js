import App from '../App.jsx'
import Index from '../pages/IndexPage/Index.jsx'
import SignUpMain from '../pages/SignUpPage/SignUpMain.jsx'
import CardListMain from '../pages/UserPages/CardListPage/CardListMain.jsx'
import DashBoard from '../pages/AdminPages/DashBoard/DashBoard.jsx'

const routesMain = [
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Index />
            },
            {
                path: "/SignUpMain",
                element: <SignUpMain />
            },
            {
                path: "/CardListMain",
                element: <CardListMain />
            },
            {
                path: "/DashBoard",
                element: <DashBoard />
            },
        ]
    },
]

export default routesMain