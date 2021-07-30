import React from 'react';
import Modal from 'react-bootstrap/Modal';
import {Button} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import './Questions.css';
import axios from 'axios';

export default class ModalForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      question: '',
      answer: '',
      photos: null
    }

    this.onChange = this.onChange.bind(this);
    this.addQuestion = this.addQuestion.bind(this);
    this.addAnswer = this.addAnswer.bind(this);

  }

  addQuestion(event) {
    var questionDetails = {
      body: this.state.question,
      name: this.state.name,
      email: this.state.email,
      product_id: this.props.productId
    }
    axios.post('api/qa/questions', questionDetails)
    .then(() => console.log('Question submitted successfully'))
    .catch(err => console.log(err))
  }

  addAnswer(event) {
    var answerDetails = {
      body: this.state.question,
      name: this.state.name,
      email: this.state.email,
      photos: this.state.photos
    }
    axios.post(`qa/questions/${this.props.questionId}/answers`, answerDetails)
    .then(() => console.log('Question submitted successfully'))
    .catch(err => console.log(err))
  }

  onChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  // getValidationState() {
  //   const length = this.state.[event.target.name].length;
  //   if (length > 10) return 'success';
  //   if (length > 5) return 'warning';
  //   if (length > 0) return 'error';
  //   return null;
  // }

  render() {
    if (this.props.type === 'add question') {
      // console.log(this.props.productId)
      return (
        <Modal
          show={this.props.show}
          onHide={this.props.closeModal}
        >
        <Modal.Header closeButton closeLabel='' >
          <Modal.Title className='question-modal-title'>Ask Your Question</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group >
            <Form.Label>Your Question: *</Form.Label>
            <Form.Control
                as='textarea'
                type="text"
                onChange={this.onChange}
                name="question"
                value={this.state.question}
                placeholder="Why did you like the product or not?"/>
            <Form.Control.Feedback type="invalid">
                Please write a question.
            </Form.Control.Feedback>
            <br></br>
            <Form.Label>What is your nickname: *</Form.Label>
            <Form.Control
                type="text"
                onChange={this.onChange}
                name="name"
                value={this.state.name}
              placeholder="Example: jackson11!"/>
            <Form.Control.Feedback type="invalid">
                Please choose a username.
            </Form.Control.Feedback>
            <br></br>
            <Form.Label>Your Email: *</Form.Label>
            <Form.Control
                type="email"
                onChange={this.onChange}
                name="email"
                value={this.state.email}
                placeholder="Email"/>
            <Form.Control.Feedback type="invalid">
                Please provide an email.
            </Form.Control.Feedback>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" type="submit" onClick={() => this.addQuestion()}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
      )
    }
    else {
      // console.log(this.props.questionId)
      return (
        <Modal
          show={this.props.show}
          onHide={this.props.closeModal}
        >
        <Modal.Header closeButton closeLabel='' >
          <Modal.Title className='question-modal-title'>Submit Your Answer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group >
            <Form.Label>Your Answer: *</Form.Label>
            <Form.Control
                as='textarea'
                type="text"
                onChange={this.onChange}
                name="answer"
                value={this.state.answer}
                placeholder="Your answer here"/>
            <Form.Control.Feedback type="invalid">
                Please write an answer.
            </Form.Control.Feedback>
            <br></br>
            <Form.Label>What is your nickname: *</Form.Label>
            <Form.Control
                type="text"
                onChange={this.onChange}
                name="name"
                value={this.state.name}
              placeholder="Example: jack543!"/>
            <Form.Control.Feedback type="invalid">
                Please choose a username.
            </Form.Control.Feedback>
            <br></br>
            <Form.Label>Your Email: *</Form.Label>
            <Form.Control
                type="email"
                onChange={this.onChange}
                name="email"
                value={this.state.email}
                placeholder="Email"/>
            <Form.Control.Feedback type="invalid">
                Please provide an email.
            </Form.Control.Feedback>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" type="submit" onClick={() => this.addAnswer()}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
      )
    }
  }

}

// export default class Modal extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       showModal: false
//     }

//   }

//   render() {
//     if (!this.props.show) {
//       return null;
//     }

//     return (
//       <div>
//         <div>hi</div>
//         <button onClick={() => this.props.closeModal()}>Close</button>
//       </div>
//     )
//   }
