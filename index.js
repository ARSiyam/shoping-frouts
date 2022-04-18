
   //amngo -
document.getElementById('mango-minus').addEventListener('click',function(){ 
 var input=document.getElementById('mango-number')
 var mango =parseFloat(input.value);
 if(  mango > 0 ){
   mango=mango-1;
   input.value=mango;
    mangoPrice();
   mangoSubMainas();
   tax();
   total()
 }

})

   //mango +
document.getElementById('mango-plus').addEventListener('click',function(){

 var input=document.getElementById('mango-number');
      var mango=parseFloat(input.value);
      mango=mango+1;
      input.value=mango;
      mangoPrice();
      mangoSubPlas();
      tax();
      total()
})

function mangoPrice(){
   var input=document.getElementById('mango-number');
   var mango=parseFloat(input.value);
   var price=mango*50;
   document.getElementById('mango-total').innerText=price;
}
function mangoSubMainas(){
   var mangoid=document.getElementById('mango-total');
   // var mangoTotal=parseFloat(mangoid.innerText);
   var subid=document.getElementById('sub-total');
   var subtotal=parseFloat(subid.innerText);
   var total=subtotal-50;
  
   subid.innerText=total;
}

function mangoSubPlas(){
   var mangoid=document.getElementById('mango-total');
  var subid=document.getElementById('sub-total');
   var subtotal=parseFloat(subid.innerText);
   var total=50+subtotal;
  
   subid.innerText=total;
}







//oreng +
document.getElementById('orange-plus').addEventListener('click',function(){

   var input=document.getElementById('orange-number');
        var orange=parseFloat(input.value);
        orange=orange+1;
        input.value=orange;
        orangePrice();
        orangeSubPlas();
        tax();
        total()
  });
//oreng -
  document.getElementById('orange-minus').addEventListener('click',function(){ 
   var input=document.getElementById('orange-number')
   var orange =parseFloat(input.value);
   if(  orange > 0 ){
      orange=orange-1;
     input.value=orange;
      orangePrice();
      orangeSubMainas();
      tax();
      total()
   }
  
  });
  function orangePrice(){
   var input=document.getElementById('orange-number');
   var mango=parseFloat(input.value);
   var price=mango*100;
   document.getElementById('orange-total').innerText=price;
}

function orangeSubMainas(){
    var subid=document.getElementById('sub-total');
   var subtotal=parseFloat(subid.innerText);
   var total=subtotal-100;
   subid.innerText=total;
}
function orangeSubPlas(){
  
   var subid=document.getElementById('sub-total');
   var subtotal=parseFloat(subid.innerText);
   var total=100+subtotal;
  
   subid.innerText=total;
}

function tax(){
   var subid=document.getElementById('sub-total');
   var subTotal=parseFloat(subid.innerText);
   var tax=(subTotal/100)*5;
   var taxid=document.getElementById('tax-amount');
   taxid.innerText=tax;
}

function total(){
   var subid=document.getElementById('sub-total');
   var subTotal=parseFloat(subid.innerText);
   var taxid=document.getElementById('tax-amount');
   var tax=parseFloat(taxid.innerText);
   var total=subTotal+tax;
   var totalId=document.getElementById('total-price');
   totalId.innerText='';
   totalId.innerText=total;
}