
    
    let  smallAlphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let  bigAlphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    
    
    setInterval( () => {
            let num = Math.ceil(Math.random()* 2);
        let alphabetLength = Math.ceil(Math.random()* 25);
        
        let innerVal;
    
        if (num == 1){
            innerVal = smallAlphabet[alphabetLength]
    
        }else if (num == 2){
            innerVal = bigAlphabet[alphabetLength]
        }
    
        document.getElementById('demo').innerHTML += innerVal;

        if (document.getElementById('demo').innerText.length == 10){
            document.getElementById('demo').innerHTML = '';
        }
    }, 1000)



