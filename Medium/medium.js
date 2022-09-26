const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
function takeInput() {
    const inputNumber = 1;
    if (inputNumber < 1 == inputNumber > 12) {
    }
    console.log(months[inputNumber - 1]);
}
takeInput();