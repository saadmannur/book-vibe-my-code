
const getAllReadListFromLocalDB = () => {
    const allReadList = localStorage.getItem("readList");
    if(allReadList){
        return JSON.parse(allReadList);
    }else{
        return [];
    }
}

const addReadListToLocalDB = (book) => {
    const allBooks = getAllReadListFromLocalDB();
    const isAlreadyExist = allBooks.find(b => b.bookId === book.bookId);
    if(!isAlreadyExist){
        allBooks.push(book);
        localStorage.setItem("readList", JSON.stringify(allBooks))
    }
}

export {getAllReadListFromLocalDB, addReadListToLocalDB}