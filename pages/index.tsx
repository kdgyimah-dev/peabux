"use client";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const StyledHome = styled.div`
  padding: 80px;
  display: flex;
  align-items: center;
  @media (max-width: 900px) {
    padding: 20px;
  }
  .wrapper {
    display: flex;
    flex-direction: column;
    gap: 32px;
    .txt {
      font-family: "Archivo Black", sans-serif;
      display: flex;
      flex-direction: column;
      font-size: 90px;
      line-height: 100%;
      @media (max-width: 900px) {
        font-size: 40px;
      }
    }
    .txt_ {
      color: #6c63ff;
    }
    .btns {
      display: flex;
      gap: 12px;
      .btn {
        font-size: 0.7em;
        font-weight: 600;
        background: #3f3d56;
        text-align: center;
        color: #fff;
        text-transform: uppercase;
        letter-spacing: 1px;
        border: 3px solid #3f3d56;
        transition: all 0.35s;
        padding: 10px 20px;
        text-decoration: none;
        &:active {
          transform: scale(0.7);
          padding: 0px;
        }
      }
      .outlined {
        background: #fff;
        color: black;
      }
    }
  }
  .illustration {
    @media (max-width: 900px) {
      display: none;
    }
  }
`;

export default function Home() {
  return (
    <StyledHome>
      <div className="wrapper">
        <div className="txt">
          <span>Hello!</span>
          <span>Welcome to</span>
          <span className="txt_">Peabux</span>
        </div>
        <div className="btns">
          <Link href="/signup/teacher" className="btn">
            Sign up as teacher
          </Link>
          <Link href="/signup/student" className="btn outlined">
            Sign up as student
          </Link>
        </div>
        <div>
          <Link href="/list" className="txt_">
            View Registrations
          </Link>
        </div>
      </div>

      <div className="illustration">
        <Image
          src="/teacher.svg"
          alt="teacher"
          width={0}
          height={0}
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    </StyledHome>
  );
}
