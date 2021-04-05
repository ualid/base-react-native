import axios from 'axios';

export let stateInitial = null;
export const initAPIService = (state) => {  
  stateInitial = state
}
 
  const request = async function (options, isHeader = true) {

    const APIService = axios.create({
      baseURL: 'http://192.168.2.128:3333/',
      headers: {'Authorization': "bearer " + stateInitial.token},
    });
    
   
    const onSuccess = function (response) {
  
      console.debug('Request Successful!', response);
      return response.data;
    }
  
    const onError = function (error) {
      console.debug('Request Failed:', error.config);
  
      if (error.response) {
        // Request was made but server responded with something
        // other than 2xx
        console.debug('Status:', error.response.status);
        console.debug('Data:', error.response.data);
        console.debug('Headers:', error.response.headers);
  
      } else {
        console.debug('Error Message:', error.message);
      }
  
      return Promise.reject(error.response || error.message);
    }
  
  
    return APIService(options)
      .then(onSuccess)
      .catch(onError);
  }
  
  export default request;
