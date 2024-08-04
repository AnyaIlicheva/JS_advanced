const chefs = new Map();

//Повара и их специализации
chefs.set("Пицца Маргарита", "Виктор");
chefs.set( "Пицца Пепперони", "Виктор");
chefs.set("Суши Филадельфия", "Ольга");
chefs.set("Суши Калифорния", "Ольга");
chefs.set("Тирамису", "Дмитрий");
chefs.set("Чизкейк", "Дмитрий");

const ClientOrders = new Map();
function Orders(clientname, order) {
    // Получаем повара, готовящего блюдо
    const chef = chefs.get(order);

    // Добавляем заказ с поваром
    if (ClientOrders.has(clientname)) {
        ClientOrders.set(clientname, [...ClientOrders.get(clientname), {order, chef}]);
    } else {
        ClientOrders.set(clientname, [{order, chef}]);
    }
    return ClientOrders;
} 

//Заказы клиентов
Orders("Иван", "Пицца Маргарита");
Orders("Иван", "Чизкейк");
Orders("Никита","Суши Калифорния");
Orders("Светлана","Пицца Пепперони")
Orders("Никита","Чизкейк");
Orders("Никита","Пицца Пепперони")

// Вывод заказов
for (const [client, orders] of ClientOrders) {
    console.log(`Заказ клиента ${client}:`);
    for (const order of orders) {
      console.log(`- ${order.order} (Повар: ${order.chef})`);
    }
  }
