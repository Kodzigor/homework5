const padString = (name, length, symbol, flag) => {
    let resString = '';
    if(name.length < length && flag === true) {
        for(let i = 0; i < length - name.length; i++) {
            resString+=symbol;
        } resString+=name;
           
    } else if(flag === false) {
        resString+=name;
        for(let i = 0; i < length - name.length; i++) {
            resString+=symbol;
        }
    }  
    return resString;
};

let result = padString("Ivan", 10, '?', false);
console.log(result);