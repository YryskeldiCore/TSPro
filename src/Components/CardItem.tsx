import React, {FC} from 'react';

export enum CardVariant {
    outlined = 'outlined',
    primary = 'primary'
}

interface CardProps {
    width?: number;
    height: number;
    backgroundColor: string;
    children: React.ReactChild | React.ReactNode;
    border: string;
    variant: CardVariant;
}


const CardItem:
    FC<CardProps> = ({
                     width,
                     height,
                     backgroundColor,
                     children,
                     border,
                    variant
    }) => {
    return (
        <div style={{
            width,
            height,
            backgroundColor: variant === CardVariant.primary ? 'blue' : 'red',
            border: variant === CardVariant.outlined? '5px dashed blue': '2px solid black'
        }}>
            {children}
        </div>
    );
};

export default CardItem;