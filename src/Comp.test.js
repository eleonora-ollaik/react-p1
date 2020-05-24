import React from 'react';
import { render, fireEvent, screen, act } from '@testing-library/react';
import Comp from './Comp';


test ('test the Basic Comp', async () => {
    // console.log('Does this work');
    
    const myCountFunc = jest.fn();
    
    
    render (<Comp countFunc ={myCountFunc}></Comp>);
    // screen.debug();

    click(/Comp/i); 
    click(/Comp/i); 
    click(/Comp/i); 

    // const el = screen.getByText(/comp/i);

        // fireEvent.click(
        //     screen.getByText('Comp')
        // );

    console.log(myCountFunc.mock.calls.length)



});

function click (txt) {
    fireEvent.click(
        screen.getByText(txt)
    );
}