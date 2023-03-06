export const formatCurrency = (currencyId, amount = 0) => {
  const intl = {};
  switch (currencyId) {
    case "ARS":
      intl.symbol = "$";
      intl.decimals = 2;
      break;
    default:
      intl.symbol = "$";
      intl.decimals = 0;
      break;
  }
  return `${intl.symbol} ${amount
    .toFixed(intl.decimals)
    .replace(/\d(?=(\d{3})+\.)/g, "$&.")}`;
};
export const stringifyByKey = (data, key) => {
  const newArr = [];
  if (!data.length) {
    newArr.push(data.name);
  } else {
    data.forEach((el) => {
      newArr.push(el[key]);
    });
  }
  return newArr;
};

export const categoryParser = (data) => {
  if (data.lenght > 0) {
    let res = stringifyByKey(data.path_from_root, "name");
    console.log(res);
  }
};

export const setDecimals = (currencyId) => {
  switch (currencyId) {
    case "ARS":
      return 2;
    default:
      return 2;
  }
};

export const itemParser = (data, desc) => {
  const item = {};
  const {
    id,
    title,
    currency_id,
    price,
    pictures,
    condition,
    shipping,
    sold_quantity,
  } = data;
  item.id = id;
  item.title = title;
  item.price = {
    currency: currency_id,
    amount: price,
    decimals: setDecimals(currency_id),
  };
  item.picture = pictures[0].url;
  item.condition = condition;
  item.free_shipping = shipping.free_shipping;
  item.sold_quantity = sold_quantity;
  item.description = desc;
  return item;
};

export const formatNumberToCurrency = (number) => {
  const formattedNumber = parseFloat(number).toFixed(0);
  const parts = formattedNumber.split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return "$" + parts.join(",");
};
