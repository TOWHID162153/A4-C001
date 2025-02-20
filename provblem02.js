function validEmail(email){

    if(typeof email === 'string' && !/^[\.\-_+@]/.test(email) && !/\s/.test(email) && email.indexOf("@") !== -1 && email.indexOf("@") !== 0 && email.indexOf("@") !== email.length - 1 && email.endsWith){
        return true;
    }
    else if(typeof email !== 'string'){
        return "Invalid";
    }
    else{
        return false;
    }
}