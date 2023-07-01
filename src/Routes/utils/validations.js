export const validations = {

    emailV: (email) => {

        const validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

        return validEmail.test(email) ? true : false;
    },
    nameV: (name) => {
        
        const validSpaces = (input) => {
            const spacesRegex = /\s/;
            return spacesRegex.test(input) ? true : false;
        }

        return (name.trim().length > 5 && !validSpaces(name)) ? true : false;}
}