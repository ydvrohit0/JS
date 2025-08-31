const accountId = 12345
let accountEmail = "rohit@example.com"
var accountPassword = "144553"
accountCity ="Jaipur"
let accountState;
// accountId = 2 // not allowed

accountEmail = "rohit_new@example.com"
accountPassword = "144554"
accountCity = "Agra  "

console.log(accountId)
/* Prefer not to use var because of issue in block scope and functional scope */


console.table([accountId,accountEmail,accountPassword,accountCity,accountState])