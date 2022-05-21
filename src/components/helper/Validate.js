export const Validate = (data , type) => {  // 17

    const errors = {} // 18

    

    // 20 
    // email validation 
    if(!data.email) { 
        errors.email = "E-Mail Required"
    } else if(!/\S+@\S+\.\S+/.test(data.email)) { 
        errors.email = "Not Valid"
    } else { 
        delete errors.email
    }

    // 21 
    // password Validation
    if(!data.password) { 
        errors.password = "Password Required"
    } else if(data.password.length < 6) { 
        errors.password = "The Password Is Too Short"
    } else {
        delete errors.password
    }

    
     if (type === "SignUp") {

        // 19 
    // name validation
    if(!data.name.trim()) { 
        errors.name = "UserName Required"
    } else {
        delete errors.name
    }

    // 22 
    // confirm password validation
    if(!data.confirmPassword) { 
        errors.confirmPassword = "Confirm Password Is Required"
    } else if (data.confirmPassword !== data.password) { 
        errors.confirmPassword = "The Passwords Are Not Match !"
    } else {
        delete errors.confirmPassword
    }

    // 23 
    // checkBox Validation
    if(data.isAccepted) {
        delete errors.isAccepted 
     } else {
        errors.isAccepted = "Please Accept The Regulation"
     }

     }

    return errors

}