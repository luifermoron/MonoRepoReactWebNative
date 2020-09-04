import * as React from 'react';
import { StateType, sessionSelector } from "core";
import { connect } from "react-redux";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../presenters/Home/App';
import Landing from '../presenters/Auth/Landing';

const Stack = createStackNavigator();

const RootNavigation = (props : any) => {
    const { session } = props;
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {session.is_logged ? 
                    (
                        <Stack.Screen name="Home" component={Home} />
                    ) : 
                    (
                        <Stack.Screen name="Landing" component={Landing} />
                    )
                }
            </Stack.Navigator>
        </NavigationContainer>
    );
};


const mapStateToProps = (state: StateType) => ({
    session: sessionSelector(state),
});

export default connect(
    mapStateToProps,
    null,
)(RootNavigation);
