import service from ".";
import endpoints from "./endpoints";

const requests = {
  getById: (payload: any /* TODO */) => service.get(`${endpoints.base}/${payload.id}`, { ...payload }),
  getAllCountries: () => service.get(endpoints.countries),
  getGeneralStats: () => service.get(endpoints.all)
};

export default requests;