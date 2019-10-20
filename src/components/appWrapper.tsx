import styled from 'styled-components';
import { connect } from 'react-redux';
import {withRouter} from 'react-router'

import * as I from '../interfaces';
import { getBackgroundApp } from '../styles/background';

const mapStateToProps = (state: I.IStore): WrapperProps | Error => {
    if (state.weather.day.data instanceof Error) throw state.weather.day.data
    return {
        weatherState: state.weather.day.data[0].weather_state_name,
    }
}

interface WrapperProps {
    weatherState: any,
}

const AppWrapper = styled.div <WrapperProps | any>`
    background: ${props => getBackgroundApp(props.weatherState, props.location.pathname)};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px 0px;
`;

export default withRouter(connect(mapStateToProps, null)(AppWrapper))
