const Lion = require("../model/lions");

exports.params = async (req, res, next, reqId) => {
  const lion = await Lion.findById(reqId);
  if (!lion) {
    next(new Error("No lion with this ID."));
  } else {
    req.lion = lion;
    next();
  }
};

exports.addLion = async (req, res, next) => {
  try {
    // we can get the data from the frontend by
    // let data = req.body
    const lion = await Lion.create(req.body);
    res.status(400).json({
      status: "successfully added new lion.",
      lion,
    });
  } catch (err) {
    res.status(400).json({
      status: "error",
      error: err,
    });
  }
};
