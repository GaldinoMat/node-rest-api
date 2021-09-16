class Home {
  index(req, res) {
    res.json({
      testBool: true,
    });
  }
}

export default new Home();
