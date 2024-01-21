
document.querySelector("#bad").addEventListener('click',()=>{
    // console.log('button pressed');
    x=document.querySelector('#select').value
    console.log(x);
    if(x=="Bitcoin"){
        let a=document.querySelector('#inpCur').value
        let b=document.querySelector('#select').value
        localStorage.setItem('balance1',a);
        localStorage.setItem('token1',b);
        console.log(localStorage.getItem('balance1'))

        document.querySelector('.message').innerHTML='Currency successfully added.';
    
    }else if(x=="Ethereum"){
        let c=document.querySelector('#inpCur').value
        let d=document.querySelector('#select').value
        localStorage.setItem('balance2',c);
        localStorage.setItem('token2',d);

        document.querySelector('.message').innerHTML='Currency successfully added.';
    }

    
})
document.querySelector('#backbtn').addEventListener('click',()=>{
    window.location='newfile.html';
})
