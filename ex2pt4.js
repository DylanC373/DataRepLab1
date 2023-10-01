//a predefined list of ages
const ages = [25, 31, 42, 77];

const PartD = ages.map((item)=>{
    //instructions for how to handle numbers, if < 70 x2, otherwise leave it alone. 
    if(item < 70){
    return item*2;
    } else {
        return item;
    }
});
    //return PartD
console.log(PartD);