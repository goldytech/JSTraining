import { getFormData, validateForm } from './form-processor';

const init = () => {
    let examResults = [];
    let form = document.getElementById('exam-form');
    let continueButton = form.elements['btnContinue'];
    continueButton.addEventListener('click', evt => {
        let studentName = form.elements['studentName'].value;
        let id = form.elements['Id'].value;
        let mathsMarks = form.elements['mathsMarks'].value;
        let scienceMarks = form.elements['scienceMarks'].value;
        let exam = getFormData(id, studentName, mathsMarks, scienceMarks);

        let err = validateForm(exam);
        if (err) {
            setError(err);
        }
        else {
            examResults.push(exam);
            clearForm();
        }

    });
    form.addEventListener('submit', event => {

        console.table(examResults);

        event.preventDefault();

    });

};

const setError = err => {

    let { ctrlId, errMsg } = err;
    let errorControl = document.getElementById(ctrlId);
    errorControl.textContent = errMsg;
    errorControl.style.color = 'red';
    errorControl.style.borderColor = 'red';

};

const clearForm = () => {
    let form = document.getElementById('exam-form');
    form.elements['studentName'].value = '';
    form.elements['Id'].value = '';
    form.elements['mathsMarks'].value = '';
    form.elements['scienceMarks'].value = '';
};


init();