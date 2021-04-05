export const RETRIVE_MENU = 'RETRIVE_MENU';

export function retriveMenu (payload) {
    return {
      type: RETRIVE_MENU,
      payload: {...payload},
    };
}
