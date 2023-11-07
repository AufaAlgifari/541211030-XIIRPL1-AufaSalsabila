const User = require("../models/User");

module.exports = {
  index: async (req, res) => {
    try {
      const users = await User.find();
      if (users.length > 0) {
      } else {
        res.json({
          status: false,
          massage: "Data Masih Kosong",
        });
      }
    } catch (error) {
      res.status(400).json({ sucess: false });
    }
  },
  store: (req, res) => {
    users.push(req.body);
    res.json({
      status: true,
      data: users,
      method: req.method,
      url: req.url,
      massage: "Data Berhasil Ditambahkan",
    });
  },
  update: (req, res) => {
    const id = req.params.id;
    users.filter((user) => {
      if (user.id == id) {
        user.nama = req.body.nama;
        user.email = req.body.email;
        return user;
      }
    });
    res.json({
      status: true,
      data: users,
      method: req.method,
      url: req.url,
      massage: "Data Berhasil Diubah",
    });
  },
  delete: (req, res) => {
    const id = req.params.id;
    users = users.filter((user) => user.id != id);

    res.json({
      status: true,
      data: users,
      method: req.method,
      url: req.url,
      massage: "Data Berhasil Dihapus",
    });
  },
};
