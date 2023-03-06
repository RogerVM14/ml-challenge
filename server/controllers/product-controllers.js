const axios = require("axios");
const { categoriesParser } = require("../utils");

const productController = {
  buscarProductos: async (req, res) => {
    const query = req.query.q;
    async function searchML(query) {
      try {
        const response = await axios.get(
          `https://api.mercadolibre.com/sites/MLA/search?q=${query}&limit=4`
        );
        const results = response.data.results;
        return results;
      } catch (error) {
        console.error(error);
      }
    }

    const searchResults = await searchML(query);

    async function getCategories(prodList) {
      let catId = prodList[0].category_id;
      try {
        const categoriesInfo = await axios.get(
          `https://api.mercadolibre.com/categories/${catId}`
        );
        const categories = categoriesInfo.data;
        return categories;
      } catch (error) {
        console.error(error);
      }
    }

    const getItems = (productInfoResult) => {
      const itemsInfo = productInfoResult.map((result) => {
        return {
          id: result.id,
          title: result.title,
          price: {
            currency: result.currency_id,
            amount: result.price,
            decimals: "",
          },
          picture: result.thumbnail,
          condition: result.condition,
          free_shippin: result.shipping.free_shipping,
          location: result.address.state_name,
        };
      });

      return itemsInfo;
    };

    const categoriesResult = await getCategories(searchResults);
    const items = await getItems(searchResults);

    res.json({
      author: {
        name: "Rogelio",
        lastname: "Vazquez Mejia",
      },
      categories: categoriesParser(categoriesResult, "name"),
      items: items,
    });
  },
  obtenerProductoPorId: async (req, res) => {
    const prodId = req.params.id;
    const fetchItemData = async () => {
      const url = `https://api.mercadolibre.com/items/${prodId}`;
      try {
        const productInfo = await axios.get(url);
        const prod = productInfo.data;
        return prod;
      } catch (error) {
        console.error(error);
      }
    };

    const fetchItemDescription = async () => {
      const url = `https://api.mercadolibre.com/items/${prodId}/description`;
      try {
        const prodDesc = await axios.get(url);
        const plainText = prodDesc.data.plain_text;
        return plainText;
      } catch (error) {
        console.error(error);
      }
    };

    const getCategories = async (catId) => {
      const url = `https://api.mercadolibre.com/categories/${catId}`;
      try {
        const catInfo = await axios.get(url);
        const catego = catInfo.data.path_from_root;
        return catego;
      } catch (error) {
        console.error(error);
      }
    };

    const itemInfo = await fetchItemData();
    const { id, category_id } = itemInfo;
    const itemDescription = await fetchItemDescription(id);
    const itemCategories = await getCategories(category_id);

    const organizedItemInfo = {
      id: itemInfo.id,
      title: itemInfo.title,
      price: {
        currency: itemInfo.currency_id,
        amount: itemInfo.price,
      },
      picture: itemInfo.thumbnail,
      condition: itemInfo.condition,
      free_shipping: itemInfo.shipping.free_shipping,
      sold_quantity: itemInfo.sold_quantity,
      description: itemDescription,
      categories: itemCategories,
    };

    res.json({
      author: {
        name: "Rogelio",
        lastname: "Vazquez Mejia",
      },
      item: organizedItemInfo,
    });
  },
};

module.exports = productController;
