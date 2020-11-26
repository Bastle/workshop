
import React, { lazy, Suspense } from 'react';

const ContextApp = lazy(() => import(/*webpackChunkName: "contextApp" */ '../page/context'));
const Hooks = lazy(() => import(/*webpackChunkName: "hooks" */ '../page/hooks'));
const ReduxApp = lazy(() => import(/*webpackChunkName: "reduxApp" */ '../page/redux'));
const Cart = lazy(() => import(/*webpackChunkName: "cart" */ '../page/cart'));
const Login = lazy(() => import(/*webpackChunkName: "reduxApp" */ '../page/loginPage'));
const AddNum = lazy(() => import(/*webpackChunkName: "reduxApp" */ '../page/addNum'));

const LazyComponent = Com => 
    props => (
        <Suspense fallback={<div>loading...</div>}>
            <Com {...props} />
        </Suspense> 
    )

const config = [
    {
        path: '/',
        title: '切换到 context',
        component: LazyComponent(ContextApp),
        exact: true,
        isPrivate: false
    },
    {
        path: '/redux',
        title: '切换到 redux',
        compPath: '',
        component: LazyComponent(ReduxApp),
        exact: true
    },
    {
        path: '/cart',
        title: '切换到 cart',
        component: LazyComponent(Cart),
        exact: true
    },
    {
        path: '/hooks',
        title: '切换到 hooks',
        component: LazyComponent(Hooks),
        exact: true
    },
    {
        path: '/search',
        title: '切换到 add number',
        component: LazyComponent(AddNum),
        exact: true,
        isPrivate: true
    },
    {
        path: '/login',
        component: LazyComponent(Login),
        exact: true,
    }
]


export default config;