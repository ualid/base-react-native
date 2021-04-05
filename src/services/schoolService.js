
import APIService from "./api.service";

function get(params = {}) {
  return APIService({
    url:    `/schools`,
    method: 'GET',
    params: {...params}
  });
}

function create({subject, content}) {
  return APIService({
    url:    '/example/create',
    method: 'POST',
    data:   {
      subject,
      content
    }
  });
}

const SchoolService = {
  get, create 
}

export default SchoolService;