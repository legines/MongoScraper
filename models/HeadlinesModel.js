var mongoose = require("mongoose");

// Create Schema 
var Schema = mongoose.Schema;

// Create article headline schema
var headlineSchema = new Schema({
  headline: {
    type: String,
    required: true,
    unique: true
  },
  summary: {
    type: String,
    required: true
  },
  date: String,
  saved: {
    type: Boolean,
    default: false
  }
});

// Create the headline model with the headlineSchema
var Headline = mongoose.model("Headline", headlineSchema);

// Export the model
module.exports = Headline;