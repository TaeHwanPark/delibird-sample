import Cookies from "js-cookie";
import axios from "axios";

class OrdermanApi {
  constructor(baseUrl, token) {
    this.http = axios.create({
      baseURL: baseUrl,
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  }

  // test
  getOrderList(sellerId, query) {
    return new Promise(resolve => {
      window.setTimeout(() => {
        resolve([
          {
            order_id: 1,
            order_number: 'Order-001',
            order_items: [
              {
                title: 'God of War',
                sku: 'GOW-1'
              },
              {
                title: 'God of War2',
                sku: 'GOW-2'
              },
            ],
            ordered_at: `2018-11-12'T'11:00:00`
          },
          {
            order_id: 1,
            order_number: 'Order-001',
            order_items: [
              {
                title: 'God of War',
                sku: 'GOW-1'
              },
              {
                title: 'God of War2',
                sku: 'GOW-2'
              },
            ],
            ordered_at: `2018-11-12'T'11:00:00`
          },
          {
            order_id: 1,
            order_number: 'Order-001',
            order_items: [
              {
                title: 'God of War',
                sku: 'GOW-1'
              },
              {
                title: 'God of War2',
                sku: 'GOW-2'
              },
            ],
            ordered_at: `2018-11-12'T'11:00:00`
          },
          {
            order_id: 1,
            order_number: 'Order-001',
            order_items: [
              {
                title: 'God of War',
                sku: 'GOW-1'
              },
              {
                title: 'God of War2',
                sku: 'GOW-2'
              },
            ],
            ordered_at: `2018-11-12'T'11:00:00`
          },
          {
            order_id: 1,
            order_number: 'Order-001',
            order_items: [
              {
                title: 'God of War',
                sku: 'GOW-1'
              },
              {
                title: 'God of War2',
                sku: 'GOW-2'
              },
            ],
            ordered_at: `2018-11-12'T'11:00:00`
          },
        ])
      }, 1000)
    });
  }
}



let api = null;
export default () => {
  if (api === null) {
    api = new OrdermanApi("test-url", "test-token");
  }
  return api;
}