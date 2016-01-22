//Used to handle DB errors without having to retype dat shiz

module.exports = exports = function(err, res) {
  console.log(err);
  res.status(500).json({msg: 'server error'});
};