export const SIGNIN = 'SIGNIN';

export function signin (loginParams) {
    return {
      type: SIGNIN,
      payload: {...loginParams},
    };
}
