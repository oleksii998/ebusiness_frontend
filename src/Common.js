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