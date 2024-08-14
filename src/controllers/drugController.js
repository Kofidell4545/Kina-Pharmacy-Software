const asyncHadler = require("express-async-handler");
const Drug = require("../models/drugModel");

const postDrug = asyncHadler(async (request, response) => {
  //Taking an information from the user //

  const { title, price, description, stock } = request.body;
  // check if all fields are provided by the user.

  if (!title || !price || !description || !stock) {
    return response.json({ message: "Please provide All Fields" });
  }
  const submit = await Drug.create(request.body);
});
