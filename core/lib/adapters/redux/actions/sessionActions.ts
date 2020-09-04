import { LOGIN_STATUS_CHANGED } from '../constants';

export type SessionType = {
  type: string,
  is_logged: boolean
}

export const loginChangedAction = (_is_logged: boolean): SessionType => ({
                                    type: LOGIN_STATUS_CHANGED,
                                    is_logged: _is_logged,
                                  });