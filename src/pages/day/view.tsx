import React, { useState, useEffect } from 'react';

import * as I from '../../interfaces';
import * as CS from '../../components/componentsStyles';


interface IDayProps extends I.IWeatherStore {
    getWeatherForDay: (requestTime: Date | undefined) => void;
}

const Day: React.FC<IDayProps> = ({ data, loading, requestTime, getWeatherForDay }) => {
    useEffect(() => {
        getWeatherForDay(requestTime);
    }, []);

    return (
        <div>

        </div>
    );
}

export default Day