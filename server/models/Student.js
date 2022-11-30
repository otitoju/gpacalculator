const mongoose = require("mongoose");
const Course = require("./Course");

const StudentSchema = new mongoose.Schema({
    fname: { type: String },
    lname: { type: String },
    department: { type: String },
    email: { type: String },
    password: { type: String },
    level: { type: String },
    courses: [{ type: mongoose.SchemaTypes.ObjectId, ref: "course" }],
});

StudentSchema.pre('remove', async function (next) {
    try {
      await Course.remove({ "_id": { $in: this.courses } });
      next();
    } catch (error) {
      next(error);
    }
  });

module.exports = mongoose.model("students", StudentSchema);
