export const sendForm = (restFunc, respCallback, errCallback) => {
    restFunc()
        .then(response => respCallback(response))
        .catch(error => errCallback(error));
};

export const onChangeHandler = (setStateFunc, event, customHandler) => {
    const name = event.target.name;
    const value = event.target.value;
    setStateFunc(currentState => {
            let newState;
            if (customHandler) {
                newState = customHandler(currentState, name, value);
            } else {
                newState = {
                    [name]: value
                }
            }
            return {
                ...currentState,
                ...newState
            }
        }
    );
};

export const getExistingData = (fetchedData, existingDataIndex) => {
    let data;
    if (fetchedData && fetchedData.length > existingDataIndex) {
        data = fetchedData[existingDataIndex];
    }
    return data;
};

export const calculatePrice = (promotions, product) => {
    const promotion = promotions.find(promotion => promotion.product.id === product.id);
    let price = product.price;
    if(promotion) {
        if(promotion.promotion.promotionType === 0) {
            price *= 1.0 - promotion.promotion.discount;
        } else {
            price -= promotion.promotion.discount;
        }
        price = <>{price.toFixed(2)} (<s>{parseFloat(promotion.product.price).toFixed(2)}</s>)</>
    }
    return price;
};