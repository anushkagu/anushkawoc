
//         const body = document.querySelector("dashboard"),
      
//       sidebar = body.querySelector(".  nav");
//       sidebarToggle = body.querySelector(".sidebar-toggle");

//      sidebarToggle.addEventListener("click", () => {
//     sidebar.classList.toggle("close");
//     if(sidebar.classList.contains("close")){
//         localStorage.setItem("status", "close");
//     }else{
//         localStorage.setItem("status", "open");
//     }
// })
document.querySelector("#btns").addEventListener('click',()=>{
    window.location='Addcurrency.html'
})
if(localStorage.getItem('balance1')){
    document.querySelector('#tnt').innerHTML=localStorage.getItem('token1');
    document.querySelector('#tnn').innerHTML=`${localStorage.getItem('balance1')}`; 
};

// console.log(document.querySelector('#tnt2')).value
if(localStorage.getItem('balance2')){
    document.querySelector('#tnt2').innerHTML=localStorage.getItem('token2');
    document.querySelector('#tnn2').innerHTML=localStorage.getItem('balance2');
};
document.querySelector("#box2").addEventListener('click',()=>{
    window.location='sell.html'
})
document.querySelector("#box3").addEventListener('click',()=>{
    window.location="buy.html";
})
let price1=localStorage.getItem('balance1');
price1=price1*42746
console.log(price1);
if(price1){
    document.querySelector('#tnp').innerHTML=price1;
}
let price2=localStorage.getItem('balance2');
price2=price2*2535
console.log(price2);
if(price2){
    document.querySelector('#tnp2').innerHTML=price2;
}
let totalbal=Number(price1)+Number(price2)
document.querySelector('#tb').innerHTML=totalbal;
document.querySelector("#clear").addEventListener('click',()=>{
    localStorage.clear();
});
       
        