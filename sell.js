document.querySelector('#btn').addEventListener('click',()=>{
    console.log(document.querySelector("#selectcur").value)
    if(document.querySelector("#selectcur").value=='Bitcoin'){
    
    document.querySelector("#btn").addEventListener('click',()=>{
        let qty=document.querySelector("#quantity").value
        let nbalance1=Number(localStorage.getItem('balance1'))
        nbalance1-=Number(qty)
        document.querySelector(".msg").innerHTML='Transaction Successful';
        localStorage.setItem('balance1',nbalance1);
        console.log(localStorage.getItem('balance1'));
    });
}

else if(document.querySelector("#selectcur").value=='Ethereum'){

    document.querySelector("#btn").addEventListener('click',()=>{
        let qty=document.querySelector("#quantity").value
        let nbalance1=Number(localStorage.getItem('balance2'))
        nbalance1-=Number(qty)
        document.querySelector(".msg").innerHTML='Transaction Successful';
        localStorage.setItem('balance2',nbalance1);
        console.log(localStorage.getItem('balance2'));
    });
}
})



document.querySelector(".btn2").addEventListener('click',()=>{
    window.location="newfile.html";
})


