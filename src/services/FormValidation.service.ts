const checkEmail = (value: string)=> {
    if(!value){
        return " Email invalide"
    }
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i;
    if(!regex.test){
        return "Champs invalide"
    }
    return true
}

const checkPassword = (value: string)=> {
    if(!value){
        return " Password invalide"
    }
    if(!(value && value.length <= 255 && value.length > 6)){
        return "Le mot de passe doit contennir au moins 7 caractère"
    }
    return true
}
export const FormValidationService = {checkEmail, checkPassword}