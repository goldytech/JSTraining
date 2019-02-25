import { checkforNull, checkforRegex } from './validators';
// Shows rest params and spread syntax
const getFormData = (...data) => {
    console.log(data);
    let exam = getObject(...data); // spread syntax
    return exam;

};

const validateForm = exam => {
    let { id, name, maths, science } = exam;
    let err = {  };
    let isIdValid = validate(() => checkforNull(id), 
                             () => checkforRegex('^[0-9]+$', id))
                             .every(v => v === true);
    
    
    if (!isIdValid) {
        err.ctrlId = 'id-error';
        err.errMsg = "Id validation failed.\n It should be number and is required";
        return err;
    }

    //TODO for other values too

};

const validate = (...validatorFunctions) => {
    console.log(validatorFunctions);
    let returnValues = [];
    validatorFunctions.forEach(func => returnValues.push(func())); // adding func return value to the array
        
    console.log('err return vals' , returnValues);
    return returnValues;
};
const getObject = (id, name, maths, science) => ({
    "id": id,
    "name": name,
    "maths": maths,
    "science": science
});


export { getFormData, validateForm };