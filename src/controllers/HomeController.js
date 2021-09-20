class HomeController {
  // Home base function
  async index(req, res) {
    res.json("Index");
  }
}

export default new HomeController();
