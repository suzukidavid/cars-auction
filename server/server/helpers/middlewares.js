const makePaginatable = async (model, page, limit) => {
  //   const page = parseInt(req.query.page);
  //   const limit = parseInt(req.query.limit);
  console.log("page", page);
  console.log("limit", limit);
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const results = {};

  if (endIndex < (await model.countDocuments().exec())) {
    results.next = {
      page: page + 1,
      limit: limit,
    };
  }

  if (startIndex > 0) {
    results.previous = {
      page: page - 1,
      limit: limit,
    };
  }
  try {
    results.results = await model.find().limit(limit).skip(startIndex).exec();
    return results;
  } catch (e) {
    throw Error(`Custoe eror: ---${e}`);
  }
};

export { makePaginatable };
