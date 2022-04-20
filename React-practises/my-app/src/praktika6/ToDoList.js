import React from 'react';
import './toDoList.css';
import { Button, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaCheck, FaChevronRight } from 'react-icons/fa';
import { useState } from 'react';


  function Todo({ todo, index, removeTodo }) {
	const [ task, setTask ] = useState(false);
	const [ theme, setTheme ] = useState(false);
		const [ name, setName ] = useState(false);
	
	 	function changeStatus() {
	 		setTask(!task);
	 	 }
	
	 	function changeTheme() {
	 		setTheme(!theme);
	 	}
	 	function changeName() {
	 		setName(!name);
	 	}
	
 	return (
		 <>
		 
 		<div className="todo">
		 <div className="container">
 			<div className="row">
		 <h3 className={theme ? 'bg-green col-8 ' : 'bg-red col-8'}>
				<span>{task ? <FaCheck /> : <FaChevronRight />}</span> {todo.text}
				</h3>
			
			  <Button
				className={theme ? 'btn-success col-1' : 'btn-danger col-1'}
					onClick={() => {
						changeStatus();
						changeTheme();
						changeName();
 					}}
					type="button"
 				>
 					{name ? 'Done' : 'Check'}
 				
 				</Button>{' '}
 				<Button variant="outline-danger col-1" onClick={() => removeTodo(index)}>
 					Remove
 				</Button>
  		</div>
  		</div>
		</div>
		  </>
 	);
 }

function FormTodo({ addTodo }) {
	const [ value, setValue ] = React.useState('');
	

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!value) return;
		addTodo(value);
		setValue('');
	};
  


	return (
		<Form onSubmit={handleSubmit}>
			<Form.Group>
				<Form.Label>
					<b>Add Todo</b>
				</Form.Label>
				<Form.Control
					type="text"
					className="input"
					value={value}
					onChange={(e) =>{ setValue(e.target.value); }}
					placeholder="Add new todo"
				/>
			</Form.Group>
			<Button variant="success mb-3 addTodo" type="submit">
				Add
			</Button>
		</Form>
	);
}

function ToDoList() {
	const [ todos, setTodos ] = React.useState([
		{
			text: 'Make a cake',
			isDone: false
		}
	]);

	const addTodo = (text) => {
		const newTodos = [ ...todos, { text } ];
		setTodos(newTodos);
	};

	

	const removeTodo = (index) => {
		const newTodos = [ ...todos ];
		newTodos.splice(index, 1);
		setTodos(newTodos);
	};

	return (
		<div className="appTodo">
			<div className="container">
				<h1 className="text-center mb-4">Todo List</h1>
				<FormTodo addTodo={addTodo} />
				<div>
					{todos.map((todo, index) => (
						<Card className='cardTodo'>
							<Card.Body>
								<Todo
									key={index}
									index={index}
									todo={todo}
									removeTodo={removeTodo}
								/>
							</Card.Body>
						</Card>
					))}
				</div>
			</div>
		</div>
	);
}

export default ToDoList;
