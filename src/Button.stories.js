import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from './Button';
import { color } from '@storybook/addon-knobs/react';
import { text, boolean } from '@storybook/addon-knobs/react';

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
        <Button bg={text('bg', 'palegoldenrod')}>Hello world2</Button>
    ))
    .addWithJSX('with background 2', () => (
        <Button bg={color('bg', 'green', 'group1')}>Hello world2</Button>
    ))
    .addWithJSX('with Typescript', () => (
        <Button disabled={boolean('disabled', false)}>
            {text('text', 'Hello world')}
        </Button>
    ));