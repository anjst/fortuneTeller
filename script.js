
const readline = require('readline');

const content = {
    welcome: '\nHello this is Fortune Ball \n\nPlease think of any question you want to find answer and press ENTER \n\n',
    message: ['As I See It Yes', 'Ask Again Later', 'Better Not Tell You Now', 'Cannot Predict Now','Concentrate and Ask Again'," Don't Count On It, It Is Certain", 'It Is Decidely So', 'Most Likely', 'My Reply Is No',
 'My Sources Say No','Outlook Good', 'Outlook Not So Good', 'Reply Hazy Try Again', 'Signs Point to Yes', 'Very Doubtful', 
 'Without A Doubt', 'Yes', 'Yes - Definitely',' You May Rely On It'],
    helper: ['Sun', 'Moon', 'Family', 'Friends', 'Pets', 'Colleagues', 'Carrier', 'Politics', 'Science', 'Religion', 'Cosmic Vibes',
'Rabbit', 'Golden Egg', 'Dragon Ball'],
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const randomDate = () => {
    let year = parseInt(new Date().getFullYear())+Math.floor(Math.random()*20);
    let month = Math.floor(Math.random()*12);
    let day = Math.floor(Math.random()*30);
    return new Date(year, month, day);
  }

rl.question(content.welcome, (name) => {
    let randomFortune = Math.floor(Math.random()*content.message.length);
    let randomHelper = Math.floor(Math.random()*content.helper.length);

    console.log(`${content.message[randomFortune]} 
    \nThat will be influenced by ${content.helper[randomHelper]}
    \nApproximate Date when it will happen: ${randomDate()} `); 
    rl.close();
})
