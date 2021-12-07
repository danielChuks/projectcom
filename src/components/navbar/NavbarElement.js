// import React from 'react'
import styled from 'styled-components';
import {NavLink as Link} from 'react-router-dom'
import { FaBars } from 'react-icons/fa';

export const Nav = styled.nav`
background: #000;
height: 80px;
display: flex;
justify-content: space-between;
padding: 0.5rem calc((100v -100px) /2);
z-index:10;

` 

export const NavLink = styled(Link)`
color: #fff;
display: flex;
align-items: center ;
padding: 0 1rem;
height : 100%
cursor: pointer;
text-decoration: none;


&.active{
    color: #15cdfc;
}
`
// toogle icon 
export const Bars = styled(FaBars)`
display: none;
color: #fff;


@media screen and (max-width : 768px){
display: block ;
position: absolute;
top: 20px;
right: 10px;
transform: translate(-100%, 75%);
front-size: 1.8rem;
cursor: pointer
}`

export const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: -24px;

@media screen and (max-width: 768px){
    display: none;
}
`

export const NavBtn = styled.nav`
display: flex;
align-items:center;
margin-right: 24px;

@media screen and (max-width: 768px){
    display: none;
}
`

export const NavBtnLink = styled(Link)`
border-radius: 4px;
background: #256ce1;
color: #fff;
padding: 10px 22px;
border: none;
outline: none;
cursor: pointer;
text-decoration: none;
transition: all 0.2s ease-in-out;



&:hover{
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
}
`