
import APIService from "./api.service";

function get(params = {}) {
  return APIService({
    url:    `/menu`,
    method: 'GET',
    params: {...params}
  });
}

const menuService = {
  get
}

export default menuService;
