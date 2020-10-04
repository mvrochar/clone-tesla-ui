import React, { useCallback, useLayoutEffect, useState } from 'react';
import useWrapperScroll from '../useWrapperScroll';
import { CarModel } from '../ModelContext';
import { Container } from './styles';
import { useTransform } from 'framer-motion';

interface Props {
    model: CarModel
}

type SectionDimensions = Pick<HTMLDivElement, 'offsetTop' | 'offsetHeight'>

export const ModelOverlay: React.FC<Props> = ({model, children}) => {
    const { scrollY } = useWrapperScroll()
   
    const getSectionDimensions = useCallback(() => {
        return {
            offsetTop: model.sectionRef.current?.offsetTop,
            offsetHeight: model.sectionRef.current?.offsetHeight
        } as SectionDimensions
    }, [model.sectionRef])

    const [dimensions, setDimensions] = useState<SectionDimensions>(
        getSectionDimensions()
    )

    useLayoutEffect(() => {
        function onResize() {
            const data = getSectionDimensions()
            window.requestAnimationFrame(() => setDimensions(data))
        }

        window.addEventListener('resize', onResize)

        return () => window.removeEventListener('resize', onResize)
    }, [getSectionDimensions])

    const sectionScrollProgress = useTransform (
        scrollY,
        y => (y - dimensions.offsetTop) / dimensions.offsetHeight
    )

    const opacity = useTransform(
        sectionScrollProgress,
        [-0.42, -0.05, 0.05, 0.42],
        [0, 1, 1, 0]
    )

    const pointerEvents = useTransform(
        opacity, value => value > 0 ? 'auto' : 'none'
    )

    return(
        <Container style={{opacity, pointerEvents}}>
            {children}
        </Container>
    )
}