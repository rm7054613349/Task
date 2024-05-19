const Configuration = require('../models/configuration');

exports.getConfig = async (req, res) => {
  try {
    const config = await Configuration.findOne({ configId: req.params.id });
    if (!config) return res.status(404).send('Configuration not found');
    res.json(config.arrayData);
  } catch (error) {
    res.status(500).send('Server Error');
  }
};

exports.updateRemark = async (req, res) => {
  try {
    const config = await Configuration.findOneAndUpdate(
      { configId: req.params.id },
      { remark: req.body.remark },
      { new: true }
    );
    if (!config) return res.status(404).send('Configuration not found');
    res.json({ message: "success" });
  } catch (error) {
    res.status(500).send('Server Error');
  }
};
