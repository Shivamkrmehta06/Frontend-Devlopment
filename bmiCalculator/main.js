const form = document.querySelector('form')

document.addEventListener('submit',function(e){
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results')
    if(height===''||height<0||isNaN(height)){
        results.innerHTML=`Invalid Height ${height}`
    }else if(weight===''||weight<0||isNaN(weight)){
        results.innerHTML=`Invalid Weight ${weight}`
    }else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML=`<span>BMI is ${bmi}</span>`
    }
})