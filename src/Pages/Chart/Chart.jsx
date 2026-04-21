import React from 'react';
import { useLoaderData } from 'react-router';
import { Bar, BarChart, Tooltip, XAxis, YAxis} from 'recharts';

const Chart = () => {
    const books = useLoaderData();
    // console.log(books)

    const booksDataForChart = books.map(book => {
        const dataForChart = {
            bookName: book.bookName,
            totalPages: book.totalPages
        }
        return dataForChart
    })
    // console.log(booksDataForChart)

    return (
        <div className='container mx-auto flex justify-center items-center'>
            <div>
                <BarChart
                    width={1200} height={600}
                    data={booksDataForChart}
                    barCategoryGap={20}
                >
                    <XAxis dataKey={"bookName"}></XAxis>
                    <YAxis></YAxis>
                    <Tooltip></Tooltip>
                    <Bar dataKey={"totalPages"} fill='purple'></Bar>
                </BarChart>
            </div>
        </div>
    );
};

export default Chart;