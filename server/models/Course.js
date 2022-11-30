const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
    title: { type: String },
    code: { type: String },
    score: { type: Number, default: 0 },
    grade: { type: String },
    gradePoint: { type: Number, default: 0 },
    unit: { type: Number, default: 0 },
    quantityPoint: { type: Number, default: 0 }, // unit X gradePoint

});

module.exports = mongoose.model("course", CourseSchema);
