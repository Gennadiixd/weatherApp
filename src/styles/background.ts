export const getBackground = (stateOfWeather: string): string => {
    if ((/Cloud/).test(stateOfWeather) || (/Rain/).test(stateOfWeather)) {
        return `#EAEAEA`;
    } else if ((/Clear/).test(stateOfWeather) || (/Light/).test(stateOfWeather)) {
        return `#FFF7E0`;
    } else {
        return ``;
    }
}