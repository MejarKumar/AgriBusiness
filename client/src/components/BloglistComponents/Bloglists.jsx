import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Bloglists.css";

const Bloglists = () => {
  return (
    <>
      <div className="bloglist_section">
        <Container>
          <Row>
            <Col sm={5} className="bloglist_left">
              <img src="../../../Image/blog_page.svg" alt="" />
            </Col>
            <Col sm={6} className="bloglist_right">
              <h1>
                Welcome to the <span className="blogtitle">Blogs</span> world...{" "}
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                eius exercitationem atque soluta laudantium, commodi vero
                laborum aut inventore praesentium in nam nostrum excepturi quo
                vel iste cumque saepe accusantium!
              </p>
            </Col>
          </Row>

          <div className="search_section" style={{ textAlign: "center" }}>
            <input
              type="text"
              placeholder="search here..."
              className="search_field"
            />
            <button className="serach_button">Search </button>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            expedita illo natus quos. Nisi corporis quaerat placeat sunt quae
            perferendis recusandae nostrum molestias quis ipsum, eaque deleniti
            eos id voluptas.
          </p>

          <div className="list_section">
            <Row>
              <Col lg={3} sm={5} md={5} className="list_item">
                <img src="../../../Image/blog_page.svg" alt="" />
                <h4>Modern Agriculture</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ducimus natus
                </p>
                <div className="footer_card">
                  13:13 26/06/2022{" "}
                  <span>
                    <i class="fa-solid fa-thumbs-up"></i> 200{" "}
                  </span>{" "}
                  <span>
                    <i class="fa-solid fa-thumbs-down"></i> 11
                  </span>{" "}
                </div>
              </Col>
              <Col lg={3} sm={5} md={5} className="list_item">
                <img src="../../../Image/blog_page.svg" alt="" />
                <h4>Modern Agriculture</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ducimus natus
                </p>
                <div className="footer_card">
                  13:13 26/06/2022{" "}
                  <span>
                    <i class="fa-solid fa-thumbs-up"></i> 200{" "}
                  </span>{" "}
                  <span>
                    <i class="fa-solid fa-thumbs-down"></i> 11
                  </span>{" "}
                </div>
              </Col>
              <Col lg={3} sm={5} md={5} className="list_item">
                <img src="../../../Image/blog_page.svg" alt="" />
                <h4>Modern Agriculture</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ducimus natus
                </p>
                <div className="footer_card">
                  13:13 26/06/2022{" "}
                  <span>
                    <i class="fa-solid fa-thumbs-up"></i> 200{" "}
                  </span>{" "}
                  <span>
                    <i class="fa-solid fa-thumbs-down"></i> 11
                  </span>{" "}
                </div>
              </Col>
              <Col lg={3} sm={5} md={5} className="list_item">
                <img src="../../../Image/blog_page.svg" alt="" />
                <h4>Modern Agriculture</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ducimus natus
                </p>
                <div className="footer_card">
                  13:13 26/06/2022{" "}
                  <span>
                    <i class="fa-solid fa-thumbs-up"></i> 200{" "}
                  </span>{" "}
                  <span>
                    <i class="fa-solid fa-thumbs-down"></i> 11
                  </span>{" "}
                </div>
              </Col>
              <Col lg={3} sm={5} md={5} className="list_item">
                <img src="../../../Image/blog_page.svg" alt="" />
                <h4>Modern Agriculture</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ducimus natus
                </p>
                <div className="footer_card">
                  13:13 26/06/2022{" "}
                  <span>
                    <i class="fa-solid fa-thumbs-up"></i> 200{" "}
                  </span>{" "}
                  <span>
                    <i class="fa-solid fa-thumbs-down"></i> 11
                  </span>{" "}
                </div>
              </Col>
              <Col lg={3} sm={5} md={5} className="list_item">
                <img src="../../../Image/blog_page.svg" alt="" />
                <h4>Modern Agriculture</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ducimus natus
                </p>
                <div className="footer_card">
                  13:13 26/06/2022{" "}
                  <span>
                    <i class="fa-solid fa-thumbs-up"></i> 200{" "}
                  </span>{" "}
                  <span>
                    <i class="fa-solid fa-thumbs-down"></i> 11
                  </span>{" "}
                </div>
              </Col>
              <Col lg={3} sm={5} md={5} className="list_item">
                <img src="../../../Image/blog_page.svg" alt="" />
                <h4>Modern Agriculture</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ducimus natus
                </p>
                <div className="footer_card">
                  13:13 26/06/2022{" "}
                  <span>
                    <i class="fa-solid fa-thumbs-up"></i> 200{" "}
                  </span>{" "}
                  <span>
                    <i class="fa-solid fa-thumbs-down"></i> 11
                  </span>{" "}
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Bloglists;
