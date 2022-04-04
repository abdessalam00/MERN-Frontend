import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

function NavBar (){

const [collapsed, setCollapsed] = useState(true);

function toggleNavbar() {
    setCollapsed(!collapsed)
  }
 
   
    return (
      <div>
        <Navbar color="dark" dark className='mb-5'>
          <NavbarBrand href="/" className="mr-auto">ShoppingList</NavbarBrand>
          <NavbarToggler onClick={toggleNavbar} className="mr-2" />
          <Collapse isOpen={!collapsed} navbar>
            <Nav className='ml-auto' navbar >
              <NavItem>
                <NavLink href="https://google.com">Item 1</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://google.com">Item 2</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  
}
export default NavBar;