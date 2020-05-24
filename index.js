const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'mongodb://localhost:27017/recipe-app';

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(self => {
    console.log(`Connected to the database: "${self.connection.name}"`);
    // Before adding any documents to the database, let's delete all previous entries
    return self.connection.dropDatabase();
  })
  .then(() => {
    // Run your code here, after you have insured that the connection was made
    const ireneRecipe = new Recipe({
      title: "Calabacines al estilo de Cerdeña",
      cuisine: "italian",
      duration: 50,
      creator: "mjditifet"

    })
    ireneRecipe.save().then((ireneRecipe) => console.log("Receta guardada"))
  })
  .catch(error => {
    console.error('Error connecting to the database', error);
  });