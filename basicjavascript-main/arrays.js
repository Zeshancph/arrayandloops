const randomArray = ["Peter", 7, "Marianne", true, "Helle", 8 ];

let text;

let len = randomArray.length;
text = "";

for (let i=0; i < len; i++) 
{
  //text += randomArray[i] + " ";
  if(typeof randomArray[i] === 'string'){
    console.log(randomArray[i] + " is a string");
    }
    else if(typeof randomArray[i] === 'number'){
        console.log(randomArray[i] + " is a number");
    }
    else if (typeof randomArray[i] === 'boolean'){
        console.log(randomArray[i] + " is a boolean");
    }
    else {
        console.log ("None of these");
    }

  
}
/*

const productArray = [
    {
        "name": "hp",
        "price": "1000",
        "quantity": 7
      },
      {
        "name": "dell",
        "price": "2000",
        "quantity": 10
      },
      {
        "name": "sony",
        "price": "2200",
        "quantity": 15
      }

]
let strlen = productArray.length;
text = "";
let totalProducts=0;

for (let i=0; i < strlen; i++) 
{
   
    totalProducts += productArray[i].quantity;
   // console.log(productArray[i]);
    console.log(productArray[i].quantity);


}
console.log ("Total products in stock are :" + totalProducts);

*/
//console.log(productArray);

//console.log(text);