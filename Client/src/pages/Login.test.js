import {React,useState} from "react";
import { mount, shallow } from "enzyme";
import {render, fireEvent} from '@testing-library/react'
import "../../enzymeConfig";
import Login from "./login";
import CreateAccount, {isValidEmail, getValidUsername} from "./createAccount";

import { MemoryRouter } from 'react-router-dom';


describe("Test login form", function() {
    test("Login form renders without crashing", async () => {
      render(<Login />, {wrapper: MemoryRouter});
    });

   
    
 });


 describe("Test createAccount form", function() {
    test("Create Account Form renders without crashing", () => {
        render(<CreateAccount />, {wrapper: MemoryRouter});
    });

    test("isValidEmail function should pass on correct input", () =>{
        const text = "text@gmail.com";
        expect(isValidEmail(text)).toBe(true);
    })

    test("isValidEmail function should not pass on incorrect input", () =>{
        const text = "text";
        expect(isValidEmail(text)).toBe(false);
    })

    test("isValidUsername function should turn input having only alphanumeric characters", () =>{
        const text = "!()username12%";
        expect(getValidUsername(text)).toBe("username12");
    })

 });