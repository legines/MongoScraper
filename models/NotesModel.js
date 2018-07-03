var mongoose = require("mongoose");

// Create Schema 
var Schema = mongoose.Schema;

// Create notes schema
var noteSchema = new Schema({
  _headlineID: {
    type: Schema.Types.ObjectId,
    ref: "Headline"
  },
  date: String,
  noteText: String
});

// Create the headline model with the headlineSchema
var Note = mongoose.model("Note", noteSchema);

// Export the model
module.exports = Note;