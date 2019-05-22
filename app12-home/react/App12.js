import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styles from './styles.css';
import classnames from 'classnames';

export default class App15 extends Component {
    static defaultProps = {
        blockimages1: [],
        blockimages2: [],
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
                blockimages1: {
                    minItems: 1,
                    title: 'Bloque imagenes 1',
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
                blockimages2: {
                    minItems: 1,
                    title: 'Bloque imagenes 2',
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
            blockimages1,
            blockimages2
        } = this.props
        
        return (
            <Grid className={(styles.abs, "mt9")}>
                <Row>
                    <Col sm={6}>
                        <Row className={styles.centrar}>
                            {blockimages1.map((d, i) =>
                                <Col sm={i==(blockimages1.length-1) ? (blockimages1.length%2==0 ? 6 : 12) : 6} className={classnames(styles.col)}>
                                    <img className={i==(blockimages1.length-1) ? (blockimages1.length%2!=0 ? styles.cortar : "") : ""} src={d.image}></img>
                                    <span className={classnames(styles.texto)}>{d.texto}</span>
                                </Col>
                            )} 
                        </Row>
                    </Col>
                    <Col sm={6}>
                        <Row className={styles.centrar}>
                            {blockimages2.map((d, i) => 
                                <Col sm={i==(blockimages2.length-1) ? (blockimages2.length%2==0 ? 6 : 12) : 6}   className={classnames(styles.col)}>
                                    <img src={d.image}></img>
                                    <span className={classnames(styles.texto1)}>{d.texto}</span>
                                </Col>
                            )}
                        </Row>
                    </Col>
                </Row>  
            </Grid>
        );
    }
}