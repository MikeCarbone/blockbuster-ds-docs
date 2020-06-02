import { DokzProvider, GithubLink, ColorModeSwitch } from 'dokz/dist'
import {
    Box,
    Button,
    Copy,
    Figure,
    Footer,
    Global,
    Header,
    Heading,
    Hero,
    Image,
    Link,
    VertSpace,
    Wrapper
  } from 'blockbuster-design-system'
import React from 'react'

export default function App(props) {
    const { Component, pageProps } = props
    return (
        <DokzProvider
            headerItems={[
                <GithubLink key='0' url='https://github.com/carbonology/blockbuster-design-system' />,
                <ColorModeSwitch key='1' />,
            ]}
            sidebarOrdering={{
                'index.mdx': true,
                components: {}
            }}
            headerLogo={
                <img
                    src='/bb-logo.png'
                    style={{ borderStyle: 'none', opacity: 0.8 }}
                    width='200px'
                />
            }
            playgroundScope={{
                Box, Button, Copy, Figure, Footer, Global, Header, Heading, Hero, Image, Link, VertSpace, Wrapper
              }}
        >
            <Global />
            <Component {...pageProps} />
        </DokzProvider>
    )
}
