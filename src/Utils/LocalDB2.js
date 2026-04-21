
const getAllWishListFromLocalDB = () => {
    const allWishList = localStorage.getItem("wishList");
    if(allWishList){
        return JSON.parse(allWishList);
    }else{
        return [];
    }
}

const addWishListTOLocalDB = (book) => {
    const allWishList = getAllWishListFromLocalDB()
    const isAlreadyExist = allWishList.find(b => b.bookId === book.bookId);
    if(!isAlreadyExist){
        allWishList.push(book)
        localStorage.setItem("wishList", JSON.stringify(allWishList))
    }
}

export {getAllWishListFromLocalDB, addWishListTOLocalDB}