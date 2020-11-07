export const increment = (number) => 
{
    return{
        type: 'INCREMENT',
        //any extra data
        payload: number
    };
};

export const decrement = () => 
{
    return{
        type: "DECREMENT"
    };
};