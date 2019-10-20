import styled from 'styled-components';
import { connect } from 'react-redux';

import * as I from '../interfaces';
import { getBackground } from '../styles/background'

const mapStateToProps = (state: I.IStore): WrapperProps | Error => {
    if (state.weather.day.data instanceof Error) throw state.weather.day.data
    return {
        weatherState: state.weather.day.data[0].weather_state_name,
    }
}

interface WrapperProps {
    weatherState: any,
}

const AppWrapper = styled.div <WrapperProps>`
    background: ${props => getBackground(props.weatherState)};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px 0px;
`;

export default connect(mapStateToProps, null)(AppWrapper)
