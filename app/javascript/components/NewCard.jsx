import React, { Component ,useState} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useHistory } from 'react-router-dom';

function CardForm(prop) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let history = useHistory();

  const handleChange = e => {
    let newValue = e.target.value;
    let key = e.target.name;
    prop.this.setState({
      [key]: newValue
    });
    if (e.target.value != ''){
      var invalid_input = document.getElementById("exampleForm.ControlInput1");
      var invalid_name = document.getElementById("invalid-feedback");
      invalid_input.style.borderColor = '#28a745';
      invalid_name.style.display = 'none';
    }else if (e.target.value === '') {
      var invalid_input = document.getElementById("exampleForm.ControlInput1");
      var invalid_name = document.getElementById("invalid-feedback");
      invalid_input.style.borderColor = '#dc3545';
      invalid_name.style.display = 'block';
    }

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (prop.this.state.name === ''){
      var invalid_input = document.getElementById("exampleForm.ControlInput1");
      var invalid_name = document.getElementById("invalid-feedback");
      invalid_input.style.borderColor = '#dc3545';
      invalid_name.style.display = 'block';
      setShow(true)
      return
    }else {
      setShow(true)
    }
    let data = {card: prop.this.state};
    let token = document.querySelector('meta[name="csrf-token"]').content;

    fetch('/api/v1/list/create', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        'X-Requested-With': 'XMLHttpRequest',
        'X-CSRF-Token': token
      },
      redirect: "error",
      body: JSON.stringify(prop.this.state)
    })
      .then(resp => {
        resp.json()
      })
      .then(post => {
        history.go(0);
      });
  }

  return (
    <>
      <Button variant="sm btn-primary" onClick={handleShow}>
        + ADD
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Adding A Card ON {prop.list.name} List</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="name"
              onChange={handleChange}
              autoFocus
            />
            <div id="invalid-feedback" className="invalid-feedback">Please provide a valid Name.</div>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type='submit' onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}


class NewCard extends Component {
  state = {
    name: '',
    list_id: this.props.list.id,
    board_id: this.props.list.board_id
  }


  render() {
    return (
      <CardForm list={this.props.list} this={this} />
    )
  }
}

export default NewCard
