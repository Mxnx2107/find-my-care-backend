export const generatePassword = (length = 10) => {
    const words = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let result = '';

    for (let i = 0; i < length; i++){
        const randomPass = Math.floor(Math.random() * words.length);

        result += words[randomPass];
        
    }
    return result;
}