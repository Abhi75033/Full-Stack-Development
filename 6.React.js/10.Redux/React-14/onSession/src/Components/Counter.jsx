import { useDispatch, useSelector } from "react-redux";
import { decrement, decrementByAmmount, increment, incrementByAmmount } from "../Features/CounterSlice";

function Counter() {
    const count = useSelector(state=>state.counter.value);
    const dispatch = useDispatch()
    return ( 
        
        <>
<div>
    <h3>{count}</h3>
    <button onClick={()=>dispatch(increment())}>+</button>
    <button onClick={()=>dispatch(decrement())}>-</button>
    <button onClick={()=>dispatch(incrementByAmmount(5))}>Increase by 5</button>
    <button onClick={()=>dispatch(decrementByAmmount(3))}>Decreace by 3</button>

</div>
        </>
     );
}

export default Counter;