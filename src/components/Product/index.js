import React, { useState } from 'react';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { Wrapper, OverlayWrapper, Card, CardBody, CardImage, CardPrice, CardTitle, Icon } from './Styles';

export const Product = ({ addProductToCart, ...props }) => {
    const [hover, setHover] = useState(false);

    const handleMouseEnter = () => setHover(true);
    const handleMouseLeave = () => setHover(false);

    return (
        <Wrapper
            onMouseEnter={ () => handleMouseEnter() }
            onMouseLeave={ () => handleMouseLeave() }
        >
            {hover && (
                <OverlayWrapper onClick={ () => addProductToCart({ ...props }) }>
                    <Icon icon={ faCartPlus } />
                </OverlayWrapper>
            )}
            <Card>
                <CardImage src={ props.imageURL } />

                <CardBody>
                    <CardTitle>{ props.title }</CardTitle>

                    <CardPrice>{ props.price }</CardPrice>
                </CardBody>
            </Card>
        </Wrapper>
    )
}
