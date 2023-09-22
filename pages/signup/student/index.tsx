"use client";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import SignupHeader from "../../components/signupHeader";
import * as Yup from "yup";
import { useFormik } from "formik";
import Input from "../../components/inputs";
import { useRouter } from "next/router";

const StyledSignupStudent = styled.div`
  padding: 80px;
  .wrapper {
    .navigator {
      background-color: #56535351;
      padding: 10px 20px;
      border-radius: 20px;
      font-weight: bold;
    }
    .form_wrapper {
      display: flex;
      width: 100%;
      form {
        width: 100%;
        .name_wrapper {
          display: flex;
          gap: 12px;
        }
        .input_wrapper {
          display: flex;
          flex-direction: column;
          width: 100%;
          margin-bottom: 32px;

          label {
            @include font(Inter, 500, 14px, 20px, #111827);
          }
          .MuiOutlinedInput-notchedOutline {
            border: 1px solid #d0d5dd;
            border-radius: 8px;
            top: 0;
            legend {
              display: none;
            }
          }
          .error {
            color: #ef1c1c;
            font-size: 12px;
          }
        }
        .btn {
          display: flex;
          justify-content: flex-end;
          button {
            font-size: 0.7em;
            line-height: 50px;
            font-weight: 600;
            background: #6c63ff;
            text-align: center;
            color: #fff;
            text-transform: uppercase;
            letter-spacing: 1px;
            border: 3px solid #6c63ff;
            transition: all 0.35s;
            padding: 0px 20px;
            text-decoration: none;
            &:active {
              transform: scale(0.7);
              padding: 0px;
            }
          }
        }
      }
    }
  }
`;

const schema = Yup.object().shape({
  firstname: Yup.string()
    .matches(/^[a-zA-Z ]*$/, "Numbers are not allowed in the name.")
    .required("This field is required"),
  lastname: Yup.string()
    .matches(/^[a-zA-Z ]*$/, "Numbers are not allowed in the name.")
    .required("This field is required"),
  dob: Yup.date()
    .max(new Date("01-01-2002"))
    .required("This field is required"),
  studentNumber: Yup.string().required("This field is required"),
  idNumber: Yup.number().required("This field is required"),
});

export default function SignupStudent() {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      dob: "",
      studentNumber: "",
      idNumber: "",
    },

    enableReinitialize: true,

    validationSchema: schema,

    onSubmit: async (values) => {
      const data = {
        firstname: values.firstname,
        lastname: values.lastname,
        dob: values.dob,
        studentNumber: values.studentNumber,
        idNumber: values.idNumber,
      };
      const storedData = localStorage.getItem("datas");
      const userData = JSON.parse(storedData);
      userData.users.push(data);
      localStorage.setItem("datas", JSON.stringify(userData));
      router.push("/list");
    },
  });

  const { errors, touched, values, handleChange, handleSubmit } = formik;

  return (
    <StyledSignupStudent>
      <div className="wrapper">
        <Link href="/" className="navigator">
          Back
        </Link>
        <div className="form_wrapper">
          <SignupHeader
            title="Signup !"
            description="Fill form to signup as a student"
          />

          <form onSubmit={handleSubmit} method="POST">
            <div className="name_wrapper">
              <div className="input_wrapper">
                <label htmlFor="firstname">First Name</label>
                <Input
                  type="text"
                  name="firstname"
                  value={values.firstname}
                  onChange={handleChange}
                  id="firstname"
                  placeholder="Your first name"
                />
                {errors.firstname && touched.firstname && (
                  <span className="error">{errors.firstname}</span>
                )}
              </div>
              <div className="input_wrapper">
                <label htmlFor="lastname">Last Name</label>
                <Input
                  type="text"
                  name="lastname"
                  value={values.lastname}
                  onChange={handleChange}
                  id="lastname"
                  placeholder="Your last name"
                />
                {errors.lastname && touched.lastname && (
                  <span className="error">{errors.lastname}</span>
                )}
              </div>
            </div>
            <div className="input_wrapper">
              <label htmlFor="dob">Dob</label>
              <Input
                type="date"
                name="dob"
                value={values.dob}
                max="2002-01-01"
                onChange={handleChange}
                id="dob"
                placeholder="Your date of birth"
              />
              {errors.dob && touched.dob && (
                <span className="error">{errors.dob}</span>
              )}
            </div>
            <div className="input_wrapper">
              <label htmlFor="studentNumber">Student Number</label>
              <Input
                type="tel"
                name="studentNumber"
                value={values.studentNumber}
                onChange={handleChange}
                id="studentNumber"
                placeholder="Your student number"
              />
              {errors.studentNumber && touched.studentNumber && (
                <span className="error">{errors.studentNumber}</span>
              )}
            </div>

            <div className="input_wrapper">
              <label htmlFor="idNumber">National ID Number</label>
              <Input
                type="tel"
                name="idNumber"
                value={values.idNumber}
                onChange={handleChange}
                id="idNumber"
                placeholder="Your National ID number"
              />
              {errors.idNumber && touched.idNumber && (
                <span className="error">{errors.idNumber}</span>
              )}
            </div>

            <div className="btn">
              <button type="submit">Save changes</button>
            </div>
          </form>
        </div>
      </div>
    </StyledSignupStudent>
  );
}
