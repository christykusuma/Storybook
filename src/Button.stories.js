import React from 'react'
import { storiesOf } from '@storybook/react'
import { Button } from './Button'

// add changed to addWithJSX
storiesOf('Button', module)
    .addParameters({
        info: {
            styles: {
                header: {
                    h1: {
                        color: 'purple', // and the headers of the sections are red.
                    },
                },
            },
        },
    })
    .addWithJSX('with background', () => ( 
        <Button bg="palegoldenrod">Hello World</Button>
    ))
    .addWithJSX('with background 2', () => (
        <Button bg="green">Hello World</Button>
    ))