import React, { useState } from "react";
import {
  Container,
  Navbar,
  Form,
  Button,
  ListGroup,
  Row,
  Col,
  Card,
} from "react-bootstrap";

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { id: Date.now(), text: newTodo }]);
      setNewTodo("");
    }
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddTodo();
    }
  };

  return (
    <Container className="mt-5">
      {/* Navbar Heading */}
      <Navbar bg="primary" variant="dark" className="mb-4 rounded">
        <Container>
          <Navbar.Brand href="#home">My Todo App</Navbar.Brand>
        </Container>
      </Navbar>

      {/* Add Todo Form */}
      <Row className="mb-4">
        <Col md={{ span: 8, offset: 2 }}>
          <Card>
            <Card.Body>
              <Form.Group controlId="todoInput">
                <Form.Label>Add a new task</Form.Label>
                <div className="d-flex">
                  <Form.Control
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Enter your todo..."
                  />
                  <Button
                    variant="primary"
                    onClick={handleAddTodo}
                    className="ms-2"
                  >
                    Add
                  </Button>
                </div>
              </Form.Group>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Todo List */}
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <Card>
            <Card.Body>
              <Card.Title>Your Todos</Card.Title>
              {todos.length === 0 ? (
                <p className="text-muted">No todos yet. Add one above!</p>
              ) : (
                <ListGroup>
                  {todos.map((todo) => (
                    <ListGroup.Item
                      key={todo.id}
                      className="d-flex justify-content-between align-items-center"
                    >
                      {todo.text}
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => handleDeleteTodo(todo.id)}
                      >
                        Delete
                      </Button>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default TodoApp;
