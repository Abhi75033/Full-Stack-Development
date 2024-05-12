import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function Login() {
  return (
    <>
    <h1 className='mb-2 text-center'>Login/SignUp</h1>
    <Form className='mt-4'>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          Email
        </Form.Label>
        <Col sm="10">
          <Form.Control type='text' placeholder='@jhondoe@example.com'/> 
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Password
        </Form.Label>
        <Col sm="10">
          <Form.Control type="password" placeholder="Password" />
        </Col>
      </Form.Group>
    </Form>
    
    <button className='w-100 pt-1 pb-1 bg-primary text-bg-warning'  href="#">Link</button>
    </>
  );
}

export default Login;