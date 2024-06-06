import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Root from "./routes/root/Root";
import ErrorPage from "./routes/error/ErrorPage";
import Profile from "./routes/profile/Profile";
import Catalog from "./routes/catalog/Catalog";
import About from "./routes/about/About";
import Item from "./routes/catalog/item/Item";
import Support from "./routes/support/Support";
import {Provider} from "react-redux";
import configureStore from "./redux/store";
import {PersistGate} from "redux-persist/integration/react";
import ProductCreationForm from "./routes/add-product/ProductCreationForm";
import ProductUpdate from "./routes/catalog/update/ProductUpdate";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "profile",
                element: <Profile/>
            },
            {
                path: "catalog",
                element: <Catalog/>,
                children: [
                    {
                        path: ":itemId",
                        element: <Item/>,
                    },
                    {
                        path: "modify/:itemId",
                        element: <ProductUpdate/>
                    }
                ]
            },
            {
                path: "about",
                element: <About/>
            },
            {
                path: "support",
                element: <Support/>
            },
            {
                path: "add-product",
                element: <ProductCreationForm/>
            }
        ]
    },
]);

const {store, persistor} = configureStore();


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <RouterProvider router={router}/>
            </PersistGate>
        </Provider>
    </React.StrictMode>
);
