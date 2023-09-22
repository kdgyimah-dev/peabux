"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SignupHeader from "../components/signupHeader";

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
      gap: 24px;
    }
    .data_wrapper {
      width: 100%;
    }
    .item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.176);
      padding: 20px;
      margin: 10px 0px;
      cursor: pointer;
      .profile {
        display: flex;
        gap: 8px;
        .image {
          width: 50px;
          height: 50px;
          background-color: #0000002f;
          display: inline-block;
          border-radius: 50%;
        }
      }
    }
  }

  @media screen and (max-width: 991px) {
    .form_wrapper {
      flex-direction: column;

      .data_wrapper {
        margin-top: 30px;
      }
    }
  }
`;

interface userDataProps {
  length?: number;
  users: {
    teacherNumber?: number;
    firstname: string;
    lastname: string;
    idNumber: number;
    dob: string;
    title?: string;
    salary?: number;
    [key: string]: string | number | undefined;
  }[];
}

export default function SignupStudent() {
  /**
   * states
   */
  const [userData, setUserData] = useState<userDataProps | null>({
    users: [{ firstname: "", lastname: "", idNumber: 0, dob: "" }],
  });

  /**
   * effect
   */
  useEffect(() => {
    // var userDataString = localStorage.getItem("datas");
    // const userData = JSON.parse(userDataString);
    const storedData = localStorage.getItem("datas") || "";
    const parsedData = JSON.parse(storedData);
    setUserData(parsedData);
    console.log(userData);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledSignupStudent>
      <div className="wrapper">
        <Link href="/" className="navigator">
          Back
        </Link>
        <div className="form_wrapper">
          <SignupHeader
            title="Welcome !"
            description="Find teachers and student "
          />
          <div className="data_wrapper">
            {(!userData || userData?.length === 0) && (
              <p>
                No details added here yet.{" "}
                <Link href="/" className="navigator">
                  Back to Home
                </Link>
              </p>
            )}

            {userData?.users?.map((item, index) => {
              return (
                <div className="item" key={item.title}>
                  <span className="profile">
                    <span className="image"></span>
                    <span className="details">
                      <p className="name">
                        {" "}
                        {item.title ? item.title : ""} {item.firstname}{" "}
                        {item.lastname}{" "}
                      </p>
                      <p className="name">{item.dob}</p>
                    </span>
                  </span>
                  <p className="id">{item.idNumber}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </StyledSignupStudent>
  );
}
