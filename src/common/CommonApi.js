import Cookies from 'js-cookie'
import axios from 'axios'

class CommonApi {
  constructor(baseUrl, token) {
    this.http = axios.create({
      baseURL: baseUrl,
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  }

  getSearchConditionBySellerIdAndConditionType(sellerId, conditionType) {
    return this.http.get(`sellers/${sellerId}/search-conditions?condition-type=${conditionType}`);
  }

  updateSearchCondition(sellerId, conditionId, param) {
    const paramString = Object.keys(param)
        .map(paramName => {
          if (Array.isArray(param[paramName]) === true) {
            return `${paramName}=${param[paramName].join(',')}`;
          }

          return `${paramName}=${JSON.stringify(param[paramName])}`;
        })
        .join('&')

    return this.http.put(`sellers/${sellerId}/search-conditions/${conditionId}?${paramString}`)
  }
}

let api = null;
export default () => {
  if (api === null) {
    api = new CommonApi(Cookies.get('common_backend_url'), Cookies.get('token'));
  }
  return api;
}