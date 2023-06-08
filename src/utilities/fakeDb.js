const addToDb = id => {

    let applyJob = {};


    const appliedJob = localStorage.getItem("apply-job");

    if (appliedJob) {
        applyJob = JSON.parse(appliedJob)
    }

    const jobNo = applyJob[id];
    if (jobNo) {
        const newJob = 1;
        applyJob[id] = newJob;
    }
    else {
        applyJob[id] = 1;
    }

    localStorage.setItem("apply-job", JSON.stringify(applyJob))
}


const getAppliedJob = () => {
    let applyJob = {};


    const appliedJob = localStorage.getItem("apply-job");

    if (appliedJob) {
        applyJob = JSON.parse(appliedJob)
    }
    return applyJob
}



export { addToDb, getAppliedJob }







// // use local storage to manage cart data
// const addToDb = id => {
//     let shoppingCart = getShoppingCart();
//     // add quantity
//     const quantity = shoppingCart[id];
//     if (!quantity) {
//         shoppingCart[id] = 1;
//     }
//     else {
//         const newQuantity = quantity + 1;
//         shoppingCart[id] = newQuantity;
//     }
//     localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
// }

// const removeFromDb = id => {
//     const shoppingCart = getShoppingCart();
//     if (id in shoppingCart) {
//         delete shoppingCart[id];
//         localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
//     }
// }

// const getShoppingCart = () => {
//     let shoppingCart = {};

//     //get the shopping cart from local storage
//     const storedCart = localStorage.getItem('shopping-cart');
//     if (storedCart) {
//         shoppingCart = JSON.parse(storedCart);
//     }
//     return shoppingCart;
// }

// const deleteShoppingCart = () => {
//     localStorage.removeItem('shopping-cart');
// }

// export {
//     addToDb,
//     removeFromDb,
//     getShoppingCart,
//     deleteShoppingCart
// }
