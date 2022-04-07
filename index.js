const padString = (name, length, symbol, flag = true) => {
    let resString = '';

    if (name.length < length && flag) {   
        for (let i = 0; i < length - name.length; i++) {
            resString+=symbol;
        } 
        resString+=name;
           
    } else if (flag === false) {
        resString+=name;

        for (let i = 0; i < length - name.length; i++) {
            resString+=symbol;
        }
    }  
    return resString;
};

let result = padString("Mikhael", 7, '?', false);
console.log(result);