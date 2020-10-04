import React from 'react';
import { DefaultOverlayContent } from '../DefaultOverlayContent';
import { UniqueOverlay } from '../UniqueOverlay';
import { ModelWrapper, ModelSection } from '../Model';
import { Container, Spacer } from './styles';

export const Page: React.FC = () => {
    
    return(
        <Container>
            <ModelWrapper>
            <div>
                {[
                    'Model One',
                    'Model Two',
                    'Model Three',
                    'Model Four',
                    'Model Five',
                    'Model Six',
                    'Model Seven',
                ].map(modelName => (
                    <ModelSection 
                    key={modelName}
                    className="colored"
                    modelName={modelName} 
                    overlayNode={
                        <DefaultOverlayContent 
                            label={modelName}
                            description="Order Online for Delivery"
                        />
                    }
                />
                ))}
            </div>
            <Spacer />

            <UniqueOverlay />
            </ModelWrapper>
        </Container>
    )
}