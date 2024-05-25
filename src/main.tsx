import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";

import {loader as contactLoader} from "./Post.tsx";

    Amplify.configure(outputs);

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import ErrorPage from "./ErrorPage.tsx";
import Post from "./Post.tsx";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "post/:postId",
                element: <Post />,
                loader: contactLoader,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);
