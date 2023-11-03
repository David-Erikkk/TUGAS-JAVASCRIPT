const mongoose = require('mongoose');
const itemsRoute = require('./Routes/Items');
const app = express();
const port = 3000;

// connect to MongoDB (replace  'mongodb://localhost:27017/mydb' with your MongoDB connection string)
mongoose.connect('mongodb://localhost:27017/expressJs', {
    useNewUrlParser: true,
    useUnifiedtopology: true,
});

app.use(express.json());
app.use(itemsRoute);

// Define your routes and handlers for CRUD operations here
app.get('/', (req, res) => {
    res.send('Server is running');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})    