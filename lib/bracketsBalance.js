function bracketsBalance (str) {
    let chars = str.split('');
    let	stack = [];
    let	open = '(';
    let	close = ')';
    let	closeIndex;
    let	openIndex;
    for (var i = 0, len = chars.length; i < len; i++) {
       openIndex = open.indexOf(chars[i]);
       if (openIndex !== -1) {
           stack.push(openIndex);
           continue;
       }

       closeIndex = close.indexOf(chars[i]);
       if (closeIndex !== -1) {
           openIndex = stack.pop();
           if (closeIndex !== openIndex) {
               return false;
           }
       }
    }
    if (stack.length !== 0) {
        return false;
    }

    return true;
}
module.exports = bracketsBalance;