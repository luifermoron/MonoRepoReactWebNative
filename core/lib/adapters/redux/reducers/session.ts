import { UserSession } from '../../../entities/userSession';
import { SessionType } from '../actions/sessionActions';

const INITIAL_STATE = new UserSession(false);

export const sessionReducer = (state: UserSession = INITIAL_STATE, action: SessionType) => {
    return new UserSession(false)
}