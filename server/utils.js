const categoriesParser = (data) => {
  if (data.path_from_root.length > 0) {
    let res = stringifyByKey(data.path_from_root, "name");
    return res;
  }
};

const stringifyByKey = (data, key) => {
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

module.exports = {
  categoriesParser,
};
