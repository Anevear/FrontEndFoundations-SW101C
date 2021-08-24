const testRegex = () => {
         document.getElementById('results').innerHTML = '';

         testEmail();
         testZip();
}

const testEmail = () => {
         var email = document.getElementById('Email').value;

         var regex = /^\w+@\w+.(com|net|org)$/;

         test("email", email, regex);
}

const testZip = () => {
         var zip = document.getElementById('Zip').value;

         var regex = /^\d{5}(?:-\d{4})?$/

         test("zip", zip, regex);
}

const test = (item, input, regex) => {
         if(input.match(regex)) {
                  output(input + " is a valid " + item);
         } else {
                  output(input + " is NOT a valid " + item);
         }
}