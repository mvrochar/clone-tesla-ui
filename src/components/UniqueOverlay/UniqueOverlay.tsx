import { useTransform } from 'framer-motion';
import React from 'react';
import useWrapperScroll from '../Model/useWrapperScroll';
import { Container, Header, Logo, Burger, Footer } from './styles';

export const UniqueOverlay: React.FC = () => {
    const { scrollYProgress } = useWrapperScroll()

    const opacity = useTransform(scrollYProgress, [0.9, 1], [0, 1])

    return(
        <Container>
            <Header>
                <Logo />
                <Burger />
            </Header>

            <Footer style={{ opacity }}>
                <ul>
                    <li>
                        <a href="https://github.com/mvrochar">UI Clone</a>
                    </li>
                    <li>
                        <a href="https://github.com/mvrochar">made with love </a>
                    </li>
                    <li>
                        <a href="https://github.com/mvrochar">By Marcos</a>
                    </li>
                </ul>
            </Footer>
        </Container>
    )
}