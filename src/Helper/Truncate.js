
export const Truncate10 = (char) => {
    if (char.length >= 10){
        return char.substring(0, 10) + "...";
    }
    return char
}

module.exports =Truncate10;

export const Truncate20 = (char) => {
    if (char.length >= 20){
        return char.substring(0, 20) + "...";
    }
    return char
}

export const Truncate30 = (char) => {
    if (char.length >= 30){
        return char.substring(0, 30) + "...";
    }
    return char
}


export const Truncate40 = (char) => {
    if (char.length >= 40){
        return char.substring(0, 40) + "...";
    }
    return char
}


