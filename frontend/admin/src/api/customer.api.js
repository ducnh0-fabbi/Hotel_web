import request from "@/utils/request";

export const registerCustomer = params => {
  return request({
    url: "/register-customer",
    method: "post",
    params
  });
};

export const listCustomers = params => {
  return request({
    url: "/customer/list",
    method: "get",
    params
  });
};

export const bookRoom = params => {
  return request({
    url: "/customer/book-room",
    method: "post",
    params
  });
};

export const bookRoomOnline = params => {
  return request({
    url: "/book-room-online",
    method: "get",
    params
  });
};

export const getInfoCustomer = params => {
  return request({
    url: "/customer-info",
    method: "get",
    params
  })
}

export const updateBookRoom = params => {
  return request({
    url: "/customer-update",
    method: "get",
    params
  });
};

export const getFood = params => {
  return request({
    url: "/list/food",
    method: "get",
    params
  });
};

export const order = params => {
  return request({
    url: "/food",
    method: "post",
    params
  });
};

export const listOrder = (params) => {
  return request({
    url: "/list-order",
    method: "get",
    params
  });
};

export const listFoodOrder = (room_service_food_id) => {
  return request({
    url: "/list-food-order/" + room_service_food_id,
    method: "get"
  });
};

export const updateOrder = room_service_food_id => {
  return request({
    url: "/update-order/" + room_service_food_id,
    method: "get",
  });
};

export const listClean = () => {
  return request({
    url: "/list-clean",
    method: "get",
  });
};

export const updateClean = room_id => {
  return request({
    url: "/update-clean/" + room_id,
    method: "get",
  });
};

export const clean = room_id => {
  return request({
    url: "/clean/" + room_id,
    method: "get",
  });
};

export const listPark = data => {
  return request({
    url: "/list-park",
    method: "post",
    data
  });
};

export const updatePark = data => {
  return request({
    url: "/update-park",
    method: "post",
    data
  });
};

export const getCustomerFood = id => {
  return request({
    url: "/customer-food/" + id,
    method: "get",
  });
};

export const getCountCustomer = params => {
  return request({
    url: "/customer-count",
    method: "get",
    params
  })
}
export const detailBill = id => {
  return request({
    url: "/detail-bill/" + id,
    method: "get",
  });
};

export const pay = params => {
  return request({
    url: "/pay",
    method: "get",
    params
  });
};

export const getCountRoomByMonth = () => {
  return request({
    url: "/get-count-room-ByMonth",
    method: "get",
  });
};
export const payOnline = params => {
  return request({
    url: "/payOnline",
    method: "get",
    params
  });
};

export const payCreate = data => {
  return request({
    url: "/create-pay",
    method: "post",
    data
  });
};

export const getHistory = params => {
  return request({
    url: "/get-history",
    method: "get",
    params
  });
};

export const deleteBill = id => {
  return request({
    url: "/delete-bill/" + id,
    method: "get",
  });
};

export const updateBill = params => {
  return request({
    url: "/update-bill",
    method: "post",
    params
  });
};
