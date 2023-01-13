export const initialState = {
    items : [],
    totalAmount: 0
};

export default function reducer(state, action){

    if (action.type === "ADD_ITEM"){
        const updatedAmount = state.totalAmount + (action.item.quatity * action.item.price)
        const existingItemIndex = state.items.findIndex(item=> item._id === action.item._id);
        let existingItem = state.items[existingItemIndex];
        let updatedItems;
        if (existingItemIndex > -1){
            const updatedItem = { ...existingItem, 
                                quatity : existingItem.quatity + action.item.quatity};
            updatedItems = [...state.items];
            updatedItems[existingItemIndex] = updatedItem;
        }else{
            updatedItems = state.items.concat(action.item)
        }
        return({
            items : updatedItems,
            totalAmount : updatedAmount
    })
    }
    else if (action.type === "DECREASE_QTY"){
        const existingItemIndex = state.items.findIndex(item=> item._id === action.id);
        const existingItem = state.items[existingItemIndex];
        const updatedAmount = state.totalAmount - existingItem.price;
        let updatedItems;
        if (existingItem.quatity === 1){
            updatedItems = state.items.filter(item=> item._id != action.id);
        } 
        else{
            updatedItems = [...state.items];
            const updatedItem = {...existingItem,
                quatity: existingItem.quatity - 1}
            updatedItems[existingItemIndex] = updatedItem;
        }
        return{
            items : updatedItems,
            totalAmount : updatedAmount
        }
    }
    else if ( action.type === "REMOVE"){
        let updatedAmount = state.totalAmount - (action.item.quatity * action.item.price);
        const updatedItems = state.items.filter(item=> item._id != action.item._id);

        return {
            items : updatedItems,
            totalAmount : updatedAmount 
        }
    }
}