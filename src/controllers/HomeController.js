import Student from "../models/Student";

class Home {
  async index(req, res) {
    const newStudent = await Student.create({
      name: "Mateus",
      surname: "Galdino",
      email: "mateusgaldino1000@hotmail.com",
      age: 26,
      weight: 77,
      height: 1.84,
    });
    res.json(newStudent);
  }
}

export default new Home();
