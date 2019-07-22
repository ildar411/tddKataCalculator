function simpleOperation (string){
    if(string){
        if((eval(string) == Infinity) || (eval(string) == -Infinity) || (eval(string) == NaN)) return 'error'
        else return eval(string).toString();	
    }
    else{
        return '0';
    }
}
module.exports = simpleOperation;