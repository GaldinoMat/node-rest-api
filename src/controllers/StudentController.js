import Student from "../models/Student";

class StudentController {
  // Function to list all students in database
  async index(req, res) {
    const students = await Student.findAll();
    res.json(students);
  }

  // Function to create student in database
  async store(req, res) {
    try {
      const newStudent = await Student.create(req.body);

      const { name, surname, age } = newStudent;

      return res.json({ name, surname, age });
    } catch (error) {
      return res.status(400).json({
        errors: ["Error 400 - Bad Request"],
      });
    }
  }

  // Functiona to show a single student in database
  async show(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ["Error 400 - Missing ID"],
        });
      }

      const student = await Student.findByPk(id);

      if (!student) {
        return res.status(400).json({
          errors: ["Error 400 - Student does not exists"],
        });
      }

      const { name, surname, age } = student;

      return res.json({
        id,
        name,
        surname,
        age,
      });
    } catch (error) {
      return res.status(400).json({
        errors: ["Error 400 - Bad Request"],
      });
    }
  }

  // Function to delete a single student from database
  async delete(req, res) {
    try {
      // Find a single user by id
      const student = await Student.findByPk(req.params.id);
      if (!student) {
        return res.status(400).json({
          errors: ["student does not exist."],
        });
      }

      // Deletes user entry in database
      await student.destroy();

      return res.json(`User ${student.name} was deleted form database`);
    } catch (error) {
      return res.status(400).json({
        errors: ["Error 400 - Bad Request"],
      });
    }
  }

  // Function to update a single student from database
  async update(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ["Error 400 - Missing ID"],
        });
      }

      const student = await Student.findByPk(id);

      if (!student) {
        return res.status(400).json({
          errors: ["Error 400 - Student does not exists"],
        });
      }

      const newStudent = await student.update(req.body);

      return res.json(newStudent);
    } catch (error) {
      return res.status(400).json({
        errors: ["Error 400 - Bad Request"],
      });
    }
  }
}

export default new StudentController();
