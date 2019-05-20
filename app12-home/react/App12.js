import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styles from './styles.css';
import classnames from 'classnames';

export default class App15 extends Component {
    static defaultProps = {
        images: [],
        texto: "texto"
    }

    static uiSchema = {
        banners: {
            items: {
                images: {
                    'ui:widget': 'image-uploader',
                },
            }
        }
    }

    static getSchema = (props) => {
        return {
            title: 'Info Products Home',
            type: 'object',
            properties: {
                images: {
                    minItems: 1,
                    title: 'Items',
                    type: 'array',
                    items: {
                        title: 'Item',
                        type: 'object',
                        properties: {
                            image: {
                                default: '',
                                title: 'Imagen',
                                type: 'string',
                                widget: {
                                    'ui:widget': 'image-uploader',
                                },
                            },
                            texto: {
                                title: 'Texto de la imagen',
                                type: 'string',
                                default: 'Texto de la imagen'
                            },
                            link: {
                                title: 'Link',
                                type: 'string',
                                default: 'Link del producto'
                            }
                        },
                    },
                },
            },
        }
    }

    render() {
        const {
            images
        } = this.props

        return (
            <Grid>
                <Row>
                    <Col sm={6} className={classnames(styles.col)}>
                        <img src={images[0].image}></img>
                        <span className={classnames(styles.texto)}>{images[0].texto}</span>
                    </Col>
                    <Col sm={6}>
                        <Row>
                            <Col sm={6} className={classnames(styles.col)}>
                                <img src={images[1].image}></img>
                                <span className={classnames(styles.texto1)}>{images[1].texto}</span>
                            </Col>
                            <Col sm={6} className={classnames(styles.col)}>
                                <img src={images[2].image}></img>
                                <span className={classnames(styles.texto1)}>{images[2].texto}</span>
                            </Col>
                            <Col sm={6} className={classnames(styles.col)}>
                                <img src={images[3].image}></img>
                                <span className={classnames(styles.texto1)}>{images[3].texto}</span>
                            </Col>
                            <Col sm={6} className={classnames(styles.col)}>
                                <img src={images[4].image}></img>
                                <span className={classnames(styles.texto1)}>{images[4].texto}</span>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Grid>
        );
        //{classnames(styles.col)}
    }
}