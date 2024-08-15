const asyncHadler = require("express-async-handler");
const Drug = require("../models/drugModel");

const postDrug = asyncHadler(async (request, response) => {
  //Taking an information from the user //

  const { title, price, description, stock } = request.body;
  // check if all fields are provided by the user.

  if (!title || !price || !description || !stock) {
    return response.json({ message: "Please provide All Fields" });
  }
  const submited = await Drug.create(request.body);
  if (submited) {
    return response.json({ message: "Uploaded successfully", submited });
  } else {
    return response.json({ message: "Failed to Uplaod" });
  }
});

module.exports = postDrug;
