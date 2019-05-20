import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Banner from './Banner';
import styles from './styles.css';
import classnames from 'classnames';


export default class App15 extends Component {
    static defaultProps = {
        images: [],
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
            title: 'Info Home',
            type: 'object',
            properties: {
                imgFondo: {
                    default: '',
                    title: 'Imagen de fondo',
                    type: 'string',
                    widget: {
                        'ui:widget': 'image-uploader',
                    }
                },
                titulo: {
                    title: 'Título',
                    type: 'string',
                    default: 'Título superior'
                },
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
                            subtitulo: {
                                title: 'Título inferior de la imagen',
                                type: 'string',
                                default: 'Título inferior de la imagen'
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
            imgFondo,
            images,
            titulo
        } = this.props
        return ( 
            <Grid className="mt9 flex justify-center" >
                <Row>
                    <div className={classnames(styles.contenedor)}>
                        <img src={imgFondo}></img>   
                        <span className={classnames(styles.titulo)}>{titulo}<hr></hr></span>       
                    </div>         
                    {images.map((d, i) =>
                        <Banner img={d.image} subtitulo={d.subtitulo} link={d.link} /> 
                    )} 
                </Row> 
            </Grid>           
        );
    }
}