import { createBrowserRouter } from "react-router-dom";
import { Root } from "../components/Root";
import { MainPage } from "../pages/main";
import { PostsPage } from "../pages/posts";
import { DetailPostPage } from "../pages/posts/detail";
import { EditPostPage } from "../pages/posts/edit";
import { AddPostPage } from "../pages/posts/add";
import { AuthPage } from "../pages/auth";
import { RegistrationPage } from "../pages/registration";

export const routesConfig = [
    {
        path: '/',
        element: <Root />,
        children: [
            {
                index:true,
                element: <MainPage />
            },
            {
                path: '/posts',
                element: <PostsPage />
            },
            {
                path: '/posts/:postId',
                element: <DetailPostPage />
            },
            {
                path: '/posts/:postId/edit',
                element: <EditPostPage />
            },
            {
                path: '/posts/add',
                element: <AddPostPage />
            },
            {
                path: '/auth',
                element: <AuthPage />
            },
            {
                path: '/registration',
                element: <RegistrationPage />
            },
        ]
    },
];

export const appRouter = createBrowserRouter(routesConfig);