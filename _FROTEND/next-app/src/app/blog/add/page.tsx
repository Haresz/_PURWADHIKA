"use client";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import React from "react";

const BlogSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  description: Yup.string().min(20).required("Description is required"),
  slug: Yup.string().required("Slug is required"),
});

export default function BlogForm() {
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      slug: "",
    },
    validationSchema: BlogSchema,
    onSubmit: (values: any) => {
      alert(JSON.stringify(values));
    },
  });
  return (
    <Box my="10" className="container">
      <Heading my="10" textAlign="center">
        Add New Blog
      </Heading>
      <form onSubmit={formik.handleSubmit}>
        <Card>
          <CardBody>
            <div className="my-8">
              <label htmlFor="title">Title</label>
              <Input
                name="title"
                id="title"
                placeholder="title"
                variant="outline"
                onChange={formik.handleChange}
              />
              {formik.errors.title && (
                <div style={{ color: "red" }}>
                  {JSON.stringify(formik.errors.title)}
                </div>
              )}
            </div>
            <div className="my-8">
              <label htmlFor="descprition">Descprition</label>
              <Textarea
                name="description"
                id="description"
                placeholder="description"
                onChange={formik.handleChange}
              />
              {formik.errors.description && (
                <div style={{ color: "red" }}>
                  {JSON.stringify(formik.errors.description)}
                </div>
              )}
            </div>
            <div className="my-8">
              <label htmlFor="slug">Slug</label>
              <Input
                name="slug"
                id="slug"
                placeholder="slug"
                variant="outline"
                onChange={formik.handleChange}
              />
              {formik.errors.slug && (
                <div style={{ color: "red" }}>
                  {JSON.stringify(formik.errors.slug)}
                </div>
              )}
            </div>
          </CardBody>
          <CardFooter>
            <Button type="submit">Submit</Button>
          </CardFooter>
        </Card>
      </form>
    </Box>
  );
}
