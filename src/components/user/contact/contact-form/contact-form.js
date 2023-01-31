import React, { useState } from "react";
import { Button, Col, Container, Form, Row, Spinner } from "react-bootstrap";
import Spacer from "../../../common/spacer/spacer";
import ContactInfo from "../contact-info/contact-info";
import * as Yup from "yup";
import { useFormik } from "formik";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  //formik

  const initialValues = {
    name: "",
    email: "",
    subject: "",
    body: "",
  };

  //3 adet bilgi veriyoruz

  const validationSchema = Yup.object({
    name: Yup.string().required("Enter your name"),
    email: Yup.string()
      .email("Enter a valid e-mail")
      .required("Enter you e-mail"),
    subject: Yup.string()
      .min(5, "The subject should be at least 5 chars")
      .max(50, "The subject should be the most 50 chars")
      .required("Enter a subject"),
    body: Yup.string()
      .min(20, "The message should be at least 20 chars")
      .max(200, "The message should the 50 chars")
      .required("Enter a message"),
  });

  const onSubmit = (values) => {

    

  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <Container>
      <Row>
        <Col md={6}>
          <p>
            Looking for a small or medium economy car rental or something a
            little larger to fit all the family? We have a great range of new
            and comfortable rental cars to choose from. Browse our fleet range
            now and rent a car online today.
          </p>
          <Spacer />
          <ContactInfo />
        </Col>

        <Col md={6}>
          <Form noValidate onSubmit={formik.handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                {...formik.getFieldProps("name")}
                isInvalid={formik.touched.name && !!formik.errors.name}
                isValid={formik.touched.name && !formik.errors.name}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.name}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>E-Mail</Form.Label>
              <Form.Control
                type="email"
                {...formik.getFieldProps("email")}
                isInvalid={formik.touched.email && !!formik.errors.email}
                isValid={formik.touched.email && !formik.errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.email}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Subject</Form.Label>
              <Form.Control
                type="text"
                {...formik.getFieldProps("subject")}
                isInvalid={formik.touched.subject && !!formik.errors.subject}
                isValid={formik.touched.subject && !formik.errors.subject}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.subject}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control
                type="text"
                as="textarea"
                rows="5"
                {...formik.getFieldProps("body")}
                isInvalid={formik.touched.body && !!formik.errors.body}
                isValid={formik.touched.body && !formik.errors.body}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.body}
              </Form.Control.Feedback>
            </Form.Group>

            <Button variant="primary" type="submit" disabled={!(formik.dirty && formik.isValid)||loading}>
              {loading && <Spinner animation="border" size="sm"/>}Send Message
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactForm;
