let orderContainer = document.querySelector('.Order');

let orderBtn = document.querySelector('#Order-now');

let burger = document.querySelector('#burger');
let fries = document.querySelector('#fries');
let drinks = document.querySelector('#drinks');
let orderProducts = document.querySelector('.Order-Product');

orderBtn.addEventListener('click', ()=>{
    if(burger.checked && fries.checked && drinks.checked){
    
      let Product = `<img src="./Assests/allitems.png" width="150px" height="150px" loading="lazy"/>;
      <p class = "orderID"><b>Order ID - </b>131</p>`;
      
      orderProducts.innerHTML = "Thank you for placing an order with us!";
      setTimeout(()=>{
        orderProducts.innerHTML = 'We are preparing your order please wait...';
      }, 6000);
      setTimeout(() =>{
      orderProducts.innerHTML = Product;
    },10000);
    }
    else if(burger.checked && fries.checked){
    

      let Product = `<img src="./Assests/burgerandfries.png" width="150px" height="150px" loading="lazy"/>
      <p class = "orderID"><b>Order ID - </b>126</p>`;
      orderProducts.innerHTML = "Thank you for placing an order with us!";
      setTimeout(()=>{
        orderProducts.innerHTML = 'We are preparing your order please wait...';
      }, 6000);
      setTimeout(() =>{
      orderProducts.innerHTML = Product;
    },10000);
    }
    else if(burger.checked && drinks.checked){
    
      let Product = `<img src="./Assests/burgeranddrinks.png" width="150px" height="150px" loading="lazy"/>
      <p class = "orderID"><b>Order ID - </b>127</p>`;
      orderProducts.innerHTML = "Thank you for placing an order with us!";
      setTimeout(()=>{
        orderProducts.innerHTML = 'We are preparing your order please wait...';
      }, 6000);
      setTimeout(() =>{
      orderProducts.innerHTML = Product;
    },10000);
    }
    else if(fries.checked && drinks.checked){
    
      let Product = `
      <img src="./Assests/friesanddrinks.png" width="150px" height="150px" loading="lazy"/>
      <p class = "orderID"><b>Order ID - </b>130</p>`;
      orderProducts.innerHTML = "Thank you for placing an order with us!";
      setTimeout(()=>{
        orderProducts.innerHTML = 'We are preparing your order please wait...';
      }, 6000);
      setTimeout(() =>{
      orderProducts.innerHTML = Product;
    },10000);
    }
    else if(fries.checked){
    
      let Product = `<img src="./Assests/fries.png" width="150px" height="150px" loading="lazy"/>
      <p class = "orderID"><b>Order ID - </b>128</p>`;
      orderProducts.innerHTML = "Thank you for placing an order with us!";
      setTimeout(()=>{
        orderProducts.innerHTML = 'We are preparing your order please wait...';
      }, 6000);
      setTimeout(() =>{
      orderProducts.innerHTML = Product;
    },10000);
    }
    else if(drinks.checked){
    
      let Product = `<img src="./Assests/drinks.png" width="150px" height="150px" loading="lazy"/>
      <p class = "orderID"><b>Order ID - </b>129</p>`;
      orderProducts.innerHTML = "Thank you for placing an order with us!";
      setTimeout(()=>{
        orderProducts.innerHTML = 'We are preparing your order please wait...';
      }, 6000);
      setTimeout(() =>{
      orderProducts.innerHTML = Product;
    },10000);
    }
   
    else if(burger.checked){
      let Product = `<img src="./Assests/burger.png" width="150px" height="150px" loading="lazy"/>;
      <p class = "orderID"><b>Order ID - </b>131</p>`;

      orderProducts.innerHTML = "Thank you for placing an order with us!";
      setTimeout(()=>{
        orderProducts.innerHTML = 'We are preparing your order please wait...';
      }, 6000);
      setTimeout(() =>{
      orderProducts.innerHTML = Product;
    },10000);
    }
    else{
      alert("Please place an order first");
    }
  });

