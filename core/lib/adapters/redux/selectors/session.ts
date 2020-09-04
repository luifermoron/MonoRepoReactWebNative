
import { StateType } from './../../../frameworks/redux';
import { UserSession } from './../../../entities/userSession';

export const sessionSelector = (state: StateType): UserSession => state.session;