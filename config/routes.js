var users = require('users');
var articles = require('articles');
var comments = require('comments');
var tags = require('tags');
var auth = require('./middlewares/authorization');

module.exports = function (app) {
    var main = require('./routes/main');
    var todo = require('./routes/todo');
    var todoRouter = express.Router();
    app.use('/todos', todoRouter);

    app.get('/', main.index);
    todoRouter.get('/', todo.all);
    todoRouter.post('/create', todo.create);
    todoRouter.post('/destroy/:id', todo.destroy);
    todoRouter.post('/edit/:id', todo.edit);
};
