const form = document.querySelector('form')

form.addEventListener('submit', function(event){
    event.preventDefault()

   const height =  parseInt(document.querySelector('#height').value);
   const weight =  parseInt(document.querySelector('#weight').value);
   const result =  document.querySelector('#result');
   const output = document.querySelector('#output');
    
   if(height === '' || height < 0 || isNaN(height)){
      result.innerHTML = "Please give a valid height";
   }
   else if(weight === '' || weight < 0 || isNaN(weight)){
      result.innerHTML = "Please give a valid weight";
   }
   else {
    const bmi = (weight / ((height*height)/10000)).toFixed(2);
   result.innerHTML = `<span>${bmi}</span>`

   if(bmi <= 18.5){
    ouput.innerHTML = 'Under Weight';
   }
   else if(bmi>18.5 && bmi<25){
    output.innerHTML = 'Normal Weight'
   }
   else if(bmi>=25 && bmi<30){
    output.innerHTML = 'Over Weight'
   }
   else{
        output.innerHTML = 'GYM JAO ';
   }
   }

})

