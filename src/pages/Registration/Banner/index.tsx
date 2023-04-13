import React from "react";
import bannerPng from "../../../assets/img/banner.png";
import s from "./styles.module.scss";
const Banner = () => {
  return (
    <div className={s.root}>
      <img src={bannerPng} alt="" />
      <div>
        <h1 className="title">Sign up to AU Chat App</h1>
        <p>Fill profile, find friends and make conversation</p>
      </div>
    </div>
  );    
};

export default Banner;
