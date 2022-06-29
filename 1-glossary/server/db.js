const mongoose = require("mongoose");

// 1. Use mongoose to establish a connection to MongoDB
mongoose.connect('mongodb://localhost/glossary');
// 2. Set up any schema and models needed by the app
let wordSchema = new mongoose.Schema({
  word: {type: String, unique: true, required: true},
  definition: String,
  italicized: Boolean,
  private: Boolean
});
// 3. Export the models
let Word = mongoose.model('Word', wordSchema);

// let dummyData = {
//   word: 'Aaron',
//   description: 'lord of pans',
//   italicized: false,
//   private: false
// }

let create = (obj) => {
  console.log('inside create');

  let newEntry = new Word({
    word: obj.word,
    definition: obj.description,
    italicized: obj.italicized,
    private: obj.private
  })

  newEntry.save()
    .catch(err => {
      console.log('error saving entries')
    })
}

let read = () => {
  return Word.find()
}

// let update = () => {

// }

// let delete = () => {
// }

// 4. Import the models into any modules that need them
module.exports.create = create;
module.exports.read = read;
// module.exports.update = update;
// module.exports.delete = delete;