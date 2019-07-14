const initState = {
    pools: [
        {    id: 'c001', entry: 10, prize: 100, chosen:false },
        {    id: 'c002', entry: 15, prize: 200, chosen:false },
        {    id: 'c003', entry: 50, prize: 500, chosen:false }        
    ]
}

const poolReducer = (state = initState, action) => {
    return state;
}

export default poolReducer;
