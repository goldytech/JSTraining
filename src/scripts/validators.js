const checkforNull = val =>{
    
    return (val === undefined || val == null || val.length <= 0) ? false : true;
    
};

const checkforRegex = (regex, val) =>{
    return (val.match(regex)) ? true : false;
};

const checkforMax = (val, max) =>{
    return (val > max) ? false: true;
};

export {checkforNull,checkforRegex};