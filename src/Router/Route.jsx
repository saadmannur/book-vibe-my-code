import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Homepage from "../Pages/Homepage/Homepage";
import Books from "../Pages/Books/Books";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import BooksDetails from "../Pages/BookDetails/BooksDetails";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: Homepage
            },
            {
                path: "/books",
                Component: Books
            },
            {
                path: "/booksDetails/:id",
                loader: ()=>fetch("/booksData.json"),
                Component: BooksDetails

            },
        ]

    },
    {
        path: "*",
        Component: ErrorPage
    }
])