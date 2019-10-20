export const getBackground = (stateOfWeather: string): string => {
    if ((/Cloud/).test(stateOfWeather) || (/Rain/).test(stateOfWeather)) {
        return `#EAEAEA`;
    } else if ((/Clear/).test(stateOfWeather) || (/Light/).test(stateOfWeather) || (/Showers/).test(stateOfWeather)) {
        return `#FFF7E0`;
    } else if (stateOfWeather === 'default'){
        return `#F9F9F9`;
    } else {
        return ``
    }
}