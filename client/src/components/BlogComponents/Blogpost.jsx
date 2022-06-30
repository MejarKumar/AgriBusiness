import React, { Component } from "react";
import { Container } from "react-bootstrap";
import "./Blogform.css";

const Blogpost = () => {
  return (
    <div className="blog_post_section">
      <Container>
        <h1>Modern way to make money in Agriculture</h1>
        <img className="post_image" src="../../../Image/about.jpg" alt="" />
        <div className="blog_user_detail">
          <img className="user_image" src="../../../Image/user.jpg" alt="" />
          <div className="user_section">
            <p>user name</p>
            <p>18:18 26/06/2022</p>
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam eos
          qui quibusdam! Itaque, voluptas veritatis voluptates amet quod
          perspiciatis at facere ipsam fuga? Explicabo, quos debitis velit minus
          necessitatibus incidunt?
        </p>
        <h2>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, saepe
          qui repellendus!
        </h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex atque et
          consequuntur! Cumque debitis ut, in veritatis a repellat vitae.
          Necessitatibus deserunt in suscipit odit perferendis fuga beatae dolor
          placeat! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Culpa iure architecto suscipit rerum aspernatur odio cum atque, illo
          accusamus rem ea odit ducimus vel quos, animi excepturi beatae commodi
          aliquam.
        </p>
        <h2>Lorem ipsum dolor sit, amet consectetur</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex atque et
          consequuntur! Cumque debitis ut, in veritatis a repellat vitae.
          Necessitatibus deserunt in suscipit odit perferendis fuga beatae dolor
          placeat! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Culpa iure architecto suscipit rerum aspernatur odio cum atque, illo
          accusamus rem ea odit ducimus vel quos, animi excepturi beatae commodi
          aliquam.
        </p>
        <h2>Conclusion</h2>
        <p>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quam nam
          dolor eaque eum doloremque aliquid veritatis nulla in, cumque corporis
          eveniet et eos odit exercitationem rerum nemo ipsa assumenda!
        </p>
      </Container>
    </div>
  );
};

export default Blogpost;
