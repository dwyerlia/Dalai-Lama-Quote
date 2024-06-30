//Mixed Messages Portfolio Project
//1. Start with a greeting
//2. create a random number 
//3. Assign quotes to numbers
//4. conditional that will assign a quote to the variable that will be read
//5. Display quote

let userName = 'Liam';

userName ? console.log(`Hello ${userName}!`) : console.log('Hello!');

console.log('The Dalai Lama inspirational quote of the day is: ');

let randomNumber = Math.floor(Math.random() * 7);

let quote = '';

switch(randomNumber){
    case 0:
        quote = '“Share your knowledge. It is a way to achieve immortality.”';
        break;
    case 1:
        quote = '“Once a year, go somewhere you have never been before.”';
        break;
    case 2:
        quote = '“Know the rules well, so you can break them effectively.”';
        break;
    case 3:
        quote = '“Although you may not always be able to avoid difficult situations, you can modify the extent to which you can suffer by how you choose to respond to the situation.”';
        break;
    case 4:
        quote = '“As you breathe in, cherish yourself. As you breathe out, cherish all beings.”';
        break;
    case 5:
        quote = '“If you want others to be happy, practice compassion. If you want to be happy, practice compassion.”';
        break;
    case 6:
        quote = '“Sometimes one creates a dynamic impression by saying something, and sometimes one creates as significant of an impression by remaining silent.”';
        break;
}

console.log(quote);
console.log('- Dalai Lama');