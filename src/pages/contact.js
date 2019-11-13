import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Button, Form } from 'react-bootstrap'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'

const Contact = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  )
  const { title, description } = data.site.siteMetadata
  const [success, setSuccess] = useState(false)

  const [form, setValues] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    session: undefined,
  })

  const updateField = e => {
    setValues({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const submit = event => {
    event.preventDefault()
    createHubspot()
  }

  const createHubspot = briefUrl => {
    const portalId = '4323342'
    const formId = '76615f11-d62e-4abb-99ff-4ed072294c58'

    const url =
      'https://api.hsforms.com/submissions/v3/integration/submit/' +
      portalId +
      '/' +
      formId

    const payload = {
      fields: [
        {
          name: 'firstname',
          value: form.firstname,
        },
        {
          name: 'lastname',
          value: form.lastname,
        },
        {
          name: 'email',
          value: form.email,
        },
        {
          name: 'phone',
          value: form.phoneNumber,
        },
      ],
    }

    const header = {
      'Content-Type': 'application/json',
    }

    fetch(url, {
      method: 'POST',
      headers: header,
      body: JSON.stringify(payload),
    })
      .then(response => {
        if (response.ok) {
          response.json().then(json => {
            setSuccess(true)
            console.log(json)
          })
        }
      })
      .catch(err => {
        console.error(`Oops, looks like we've got an error ${err}`)
      })
  }

  return (
    <Layout>
      <div>
        <Helmet title={`${title} - ${description}`} />
        <div className="wrapper">
          {!success ? (
            <Form name="contact" onSubmit={e => submit(e)}>
              <Form.Group controlId="formFirstName">
                <Form.Label className="form-label">First Name</Form.Label>
                <Form.Control
                  name="firstname"
                  type="text"
                  placeholder="Enter First Name"
                  onChange={updateField}
                  required
                  value={form.firstname}
                />
              </Form.Group>
              <Form.Group controlId="formLastName">
                <Form.Label className="form-label">Last Name</Form.Label>
                <Form.Control
                  name="lastname"
                  type="text"
                  placeholder="Enter Last Name"
                  onChange={updateField}
                  required
                  value={form.lastname}
                />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label className="form-label">Email Address</Form.Label>
                <Form.Control
                  name="email"
                  type="email"
                  placeholder="Enter Email Address"
                  onChange={updateField}
                  value={form.email}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formPhone">
                <Form.Label className="form-label">Phone Number</Form.Label>
                <Form.Control
                  name="phoneNumber"
                  type="text"
                  placeholder="Enter Phone Number"
                  onChange={updateField}
                  value={form.phoneNumber}
                  required
                />
              </Form.Group>
              <Button aria-label="Submit" type="submit">
                Submit
              </Button>
            </Form>
          ) : (
            'Thanks for sign up.'
          )}
        </div>
      </div>
    </Layout>
  )
}

export default Contact
