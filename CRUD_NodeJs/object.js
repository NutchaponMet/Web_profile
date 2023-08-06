const person ={
    user1: {fname: 'nutchapon',lname: 'metmaolee'}
}

for (let[key, value] of Object.entries(person)){
    console.log(value.fname);
}