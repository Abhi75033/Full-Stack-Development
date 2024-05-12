let arr = [
  {
    id: `01`,
    Name:`Abhishek`,
    Email:`abhishek@gamil.com`,
    Phone:`+91 6394753801`,
    Country:`India`
  },
  {
    id: `02`,
    Name:`Abhi`,
    Email:`abhi@gamil.com`,
    Phone:`+91 6390688961`,
    Country:`USA`
  },
  {
    id: `03`,
    Name:`Anajli`,
    Email:`anjali@gamil.com`,
    Phone:`+91 6396464645`,
    Country:`India`
  },
  {
    id: `04`,
    Name:`Abhay`,
    Email:`abhay@gamil.com`,
    Phone:`+91 6393599867`,
    Country:`USA`
  },
];

for(let obj of arr){
    console.log(obj.Name,obj.Email, obj.Phone)
}

const filterd = arr.filter((value)=>{
  return value.Country== 'UK'
})

console.log(filterd);
