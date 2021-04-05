export const RETRIVE_SCHOOLS = 'RETRIVE_SCHOOLS';

export function retriveSchools (payload) {
    return {
      type: RETRIVE_SCHOOLS,
      payload: {...payload},
    };
}
