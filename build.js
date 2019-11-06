'use strict';

const csv = require('csv-parser')
const fs = require('fs')
const results = [];
 
fs.createReadStream('API_structure.csv')
  .pipe(csv(['className','fieldName','type','required','defaultValue','unique','min','max','regex','regexError' ]))
  .on('data', (data) => results.push(data))
  .on('end', () => {
    //console.log(results[0]);
    //construct the json object
    let len = results.length;
    let i;
    let fields = [];
    let classes = [];
    let currentClassName = '';
    let classCounter = 0;

    for(i=1; i < len ; i++){
        
        if(results[i].className !== undefined && results[i].className !== ''){
            
            if(classCounter > 0){
                //save previous class
                let newClass = {
                    name: currentClassName,
                    fields : fields
                }
                classes.push(newClass);
            }
            
            //reset values
            fields = [];
            //change new values
            currentClassName = results[i].className;
            classCounter++;
        }

        let field = {
            name: results[i].fieldName,
            type: results[i].fieldType,
            required: results[i].required === 'TRUE' ? true:false,
            unique: results[i].unique === 'TRUE' ? true:false,
            defaultValue: results[i].defaultValue.toLowerCase(),
            validation:{
                min:results[i].min !== '' ? parseFloat(results[i].min, 10): null,
                max:results[i].max !== '' ? parseFloat(results[i].max, 10): null,
                regex:results[i].regex,
                regexError:results[i].regexError
            }
        };

        fields.push(field);
    }

    //save the object file
    fs.writeFile('semsem.json', JSON.stringify(classes), function (err) {
      if (err) throw err;
      console.log('Saved!');
    });
  });

  function titleCase(str){
    str = str.toLowerCase().split(' ');
    let final = [ ];
     for(let  word of str){
       final.push(word.charAt(0).toUpperCase()+ word.slice(1));
     }
   return final.join(' ')
 
 }