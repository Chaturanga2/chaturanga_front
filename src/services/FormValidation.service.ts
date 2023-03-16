const checkEmail = (value: string)=> {
    if(!value){
        return ": Email invalide"
    }
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if(!regex.test(value)){
        return ": Champs invalide"
    }
    return true
}

const checkPassword = (value: string)=> {
    if(!value){
        return ": Password invalide"
    }
    if(!(value && value.length <= 255 && value.length > 6)){
        return ": Le mot de passe doit contenir au moins 7 caractères"
    }
    return true
}

const checkPasswordConfirmation = (value: string, password: string)=> {
    if(value !== password){
        return ": Les mots de passe ne correspondent pas"
    }
    return true
}

export const FormValidationService = {
  checkEmail,
  checkPassword,
  checkPasswordConfirmation,
}