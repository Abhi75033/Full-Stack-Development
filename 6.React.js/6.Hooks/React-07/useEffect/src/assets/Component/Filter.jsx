
const array= [
    {key:1,name:"Alex",type:"regular"},
    {key:2,name:"Bobby",type:"golden"},
    {key:3,name:"catty",type:"silver"},
    {key:4,name:"Mike",type:"regular"},
    {key:5,name:"Neha",type:"golden"},
    {key:6,name:"Abhishek",type:"silver"},
    {key:7,name:"Bhagyashree",type:"regular"},
    {key:8,name:"Vinay",type:"silver"},
    {key:9,name:"Vivek",type:"golder"},
]

function Filterd() {
    return ( <table>
        <thead>
            <tr>
                <th>Id</th><th>Name</th><th>Type</th>
            </tr>
        </thead>
        <tbody>
            {
                filteredArray.map(item=>(
                    <tr key={item.key}>
                        <td>{item.key}</td>
                        <td>{item.name}</td>
                        <td>{item.type}</td> );
                    </tr>

                ))
            }
                </tbody>
    </table> );

                
}

export default Filterd;