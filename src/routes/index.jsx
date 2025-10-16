import { createBrowserRouter } from "react-router-dom";
import { Root } from "../components/Root";
import { Main } from "../pages/main";
import { Posts } from "../pages/posts";
import { DetailPost } from "../pages/posts/detail";
import { EditPost } from "../pages/posts/edit";
import { AddPost } from "../pages/posts/add";
import { Auth } from "../pages/auth";
import { Registration } from "../pages/registration";

export const routesConfig = [
    {
        path: '/',
        element: <Root />,
        children: [
            {
                index:true,
                element: <Main />
            },
            {
                path: '/posts',
                element: <Posts />
            },
            {
                path: '/posts/:postId',
                element: <DetailPost />
            },
            {
                path: '/posts/:postId/edit',
                element: <EditPost />
            },
            {
                path: '/posts/add',
                element: <AddPost />
            },
            {
                path: '/auth',
                element: <Auth />
            },
            {
                path: '/registration',
                element: <Registration />
            },
        ]
    },
];

export const appRouter = createBrowserRouter(routesConfig);