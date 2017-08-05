import Todos from '../models/todoModel';

// Todos Api controller
const todoController = {

	getByName (req, res){
		Todos.find({ username: req.params.uname }, (err, todos) => {
      if (err) throw err;  
      res.send(todos);
    });
	},

	getById(req, res) {
		Todos.findById({ _id: req.params.id }, (err, todo) => {
      if (err) throw err;
      res.send(todo);
    });
	},

	addTodo(req, res){
		if (req.body.id) {
      Todos.findByIdAndUpdate(req.body.id, { 
      	todo: req.body.todo,
      	isDone: req.body.isDone, 
      	hasAttachment: req.body.hasAttachment 
      }, (err, todo) => {
        if (err) throw err;    
        res.send('Success');
      });
    }else {
	    const newTodo = Todos({
	      username: 'test',
	      todo: req.body.todo,
	      isDone: req.body.isDone,
	      hasAttachment: req.body.hasAttachment
	    });
	    newTodo.save(err => {
	      if (err) throw err;
	      res.send('Success');
	    });    
    }
  },

	deleteTodo(req, res){
		Todos.findByIdAndRemove(req.body.id, err => {
      if (err) throw err;
      res.send('Success');
    })
	},

	setupTodos(req, res){
    
		const starterTodos = [{
      username: 'test',
      todo: 'Buy milk',
      isDone: false,
      hasAttachment: false
    },{
      username: 'test',
      todo: 'Feed dog',
      isDone: false,
      hasAttachment: false
    },{
      username: 'test',
      todo: 'Learn Node',
      isDone: false,
      hasAttachment: false
    }];
  
	  Todos.create(starterTodos, (err, results) => {
	   	res.send(results);
    });  
	}
}

export default todoController;
