const data = {
    "latitude": -31.375,
    "longitude": -64.125,
    "generationtime_ms": 0.13303756713867188,
    // Otras propiedades...
};

// Pregunta 1
function p_1() {
    return {
        latitude: data.latitude,
        longitude: data.longitude
    };
}

// Pregunta 2
function p_2() {
    return data.hourly.data.length; // Longitud del arreglo "hourly"
}

// Pregunta 3
function p_3() {
    const hourlyData = data.hourly.data;
    const temperatureData = hourlyData.find(entry => entry.time === 1683390000); // 3:00 AM del 3 de octubre de 2023
    return temperatureData ? temperatureData.temperature : "No disponible";
}

// Pregunta 4
function p_4() {
    const hourlyData = data.hourly.data;
    const maxWindSpeedData = hourlyData.reduce((max, entry) => entry.windSpeed > max ? entry.windSpeed : max, 0);
    return maxWindSpeedData;
}

// Pregunta 5
function p_5() {
    return data.daily.data.length; // Longitud del arreglo "daily"
}

// Pregunta 6
function p_6() {
    return data.daily.data[3].sunriseTime; // Hora de salida del sol el 5 de octubre de 2023
}

// Pregunta 7
function p_7() {
    const dailyData = data.daily.data;
    const weatherCode = dailyData.find(entry => entry.time === 1683462000); // 7 de octubre de 2023
    return weatherCode ? {
        numero: weatherCode.icon,
        palabras: weatherCode.summary
    } : "No disponible";
}

// Pregunta 8
function p_8() {
    return data.elevation; // Elevación de la ubicación
}

// Pregunta 9
function p_9() {
    const hourlyData = data.hourly.data;
    const humiditySoilData = hourlyData.find(entry => entry.time === 1683435600); // 12:00 PM del 9 de octubre de 2023
    return humiditySoilData ? humiditySoilData.soilHumidity1 : "No disponible";
}

// Pregunta 10
function p_10() {
    const hourlyData = data.hourly.data;
    const temperatureMaxData = hourlyData.filter(entry => entry.time >= 1683366000 && entry.time <= 1683448800); // 3 de octubre de 2023
    return temperatureMaxData.map(entry => entry.temperature);
}

// Pregunta 11
function p_11() {
    const hourlyData = data.hourly.data;
    const windSpeedData = hourlyData.filter(entry => entry.time >= 1683517200 && entry.time <= 1683603600); // 6 de octubre de 2023
    const totalWindSpeed = windSpeedData.reduce((sum, entry) => sum + entry.windSpeed, 0);
    return totalWindSpeed / windSpeedData.length;
}

// Pregunta 12
function p_12() {
    const dailyData = data.daily.data;
    let maxTempDifference = 0;
    let dayWithMaxDifference = null;
    for (const entry of dailyData) {
        const tempDifference = entry.temperatureMax - entry.temperatureMin;
        if (tempDifference > maxTempDifference) {
            maxTempDifference = tempDifference;
            dayWithMaxDifference = entry.time;
        }
    }
    return dayWithMaxDifference;
}

// Pregunta 13
function p_13() {
    const hourlyData = data.hourly.data;
    let maxWindSpeed = 0;
    let windiestHour = null;
    for (const entry of hourlyData) {
        if (entry.windSpeed > maxWindSpeed) {
            maxWindSpeed = entry.windSpeed;
            windiestHour = entry.time;
        }
    }
    return windiestHour;
}

// Pregunta 14
function p_14() {
    const dailyData = data.daily.data;
    let earliestSunrise = Infinity;
    let latestSunset = 0;
    for (const entry of dailyData) {
        if (entry.sunriseTime < earliestSunrise) {
            earliestSunrise = entry.sunriseTime;
        }
        if (entry.sunsetTime > latestSunset) {
            latestSunset = entry.sunsetTime;
        }
    }
    return {
        earliestSunrise: earliestSunrise,
        latestSunset: latestSunset
    };
}

// Para llamar a las funciones con parámetros, simplemente pásales los valores necesarios.

console.log(p_1());
console.log(p_2());
console.log(p_3());
console.log(p_4());
console.log(p_5());
console.log(p_6());
console.log(p_7());
console.log(p_8());
console.log(p_9());
console.log(p_10());
console.log(p_11());
console.log(p_12());
console.log(p_13());
console.log(p_14());