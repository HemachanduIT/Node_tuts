const registration = require('./registration');
const login=require('./login');
function sayHello() {
    console.log("hello")
}
sayHello()
const check_registration = registration.checkforregister();
if (check_registration) {
    console.log("user already existed");
}
else {
    console.log("user not found");
    registration.register();
}
const check_login=login.checkforuser1;
if(check_login){
    // console.log("user account existed");
    login.validatePassword();
}else{
    registration.register();
}

