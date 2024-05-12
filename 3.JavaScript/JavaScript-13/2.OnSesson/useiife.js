(
    function(){
        let count=0;

       const  increment=()=>{
count++;
console.log(count)
        }

        const decrement= ()=>{
            count--;
            console.log(count)
        }

        increment()
        decrement()
    }
)();