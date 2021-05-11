let Got = require('../models/got');

function index(req, res) {
  let query = req.query.name;

  // all the data
  if (query === 'all') {
    Got.find()
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.send({
          message: 'cannot get data',
          error: err,
        });
      });
  } else {
    // specific search data
    Got.find({ name: { $regex: /^query$/i } })
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.send({
          message: 'cannot get data',
          error: err,
        });
      });
  }
}

function store(req, res) {
  let gotData = req.body;
  let got = new Got(gotData);
  got
    .save()
    .then(() => {
      res.send({ message: 'data uploaded', body: req.body });
    })
    .catch((err) =>
      res.status(422).send({
        message: 'error occured',
        error: err,
      })
    );
}

function update(req, res) {
  Got.findByIdAndUpdate(req.params.id, req.body).then((ninja) => {
    Got.findById(req.params.id).then((updatedNinja) => {
      res.send({ message: 'Updation Successfull', item: updatedNinja });
    });
  });
}

function destroy(req, res) {
  Got.findOneAndDelete(req.params.id).then((ninja) => {
    res.send({ message: 'Delete Operation Successfull', item: ninja });
  });
}

module.exports = {
  index,
  store,
  update,
  destroy,
};
