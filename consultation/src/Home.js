import React, { Component } from "react";
// import ReactDOM from "react-dom";

import { Container, Row, Col } from "shards-react";

import {
    Button
} from "shards-react";

export default class Home extends Component {
    render() {

        return (

            <Container>

                <section>

                    <h3 className="section-title w3-center w3-padding-64">Why we started The Company</h3>
                    <Row>
                        <Col>
                            <div className="w3-padding-16">

                                {/* add a carousel here */}
                                <Button>Learn more about us &rarr;</Button>

                            </div>
                        </Col>
                    </Row>

                </section>


                <section>

                    <h3 className="section-title w3-center w3-padding-64">The Team</h3>
                    <Row>
                        <Col>
                            <div className="w3-padding-16">

                                {/* add a carousel here */}
                                <Button>Learn more about us &rarr;</Button>

                            </div>
                        </Col>
                    </Row>

                </section>

                <section>

                    <h3 className="section-title w3-center w3-padding-64">Our Mission and Vision</h3>
                    <Row>
                        <Col>
                            <div className="w3-padding-16">

                                {/* add a carousel here */}
                                <Button>Learn more about us &rarr;</Button>

                            </div>
                        </Col>
                    </Row>

                </section>


                <section>

                    <h3 className="section-title w3-center w3-padding-64">Company Values</h3>
                    <Row>
                        <Col>
                            <div className="w3-padding-16">

                                {/* add a carousel here */}
                                <Button>Learn more about us &rarr;</Button>

                            </div>
                        </Col>
                    </Row>

                </section>


            </Container>

            // https://zcreativelabs.com/blog/how-to-add-svg-waves-to-your-next-web-project/
        );
    }
}