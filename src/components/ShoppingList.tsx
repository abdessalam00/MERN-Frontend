import React, { useEffect, useState } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import {CSSTransition, TransitionGroup } from 'react-transition-group';
import { v4 as uuidv4 } from 'uuid';
import { setConstantValue } from 'typescript';

function ShoppingList () {

type item = {
  _id: string;
  name: string;
};

const initialitems : item[] = [];


const [items, setitems] = useState(initialitems);

useEffect(() => {
  const url = "http://localhost:5000/api/items";

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      console.log(json);
      setitems(json);
    } catch (error) {
      console.log("error", error);
    }
  };

  fetchData();
}, []);


return (
<Container>
    <Button color="dark" style={{marginBottom: '2rm'} }
        onClick= {() => {
        const name = prompt("Enter item" ) 
        if(name){
          const prpt= {_id:uuidv4(),name:name}
          console.log(prpt._id)
          fetch('http://localhost:5000/api/items', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body:JSON.stringify(prpt),
          }).then(res => {
            console.log(res)
            if (res.statusText=="OK") {
              setitems(previtems => [prpt,...previtems])
            } else {
              console.log("error in posting")
            }
          });
      
        }}}>
        Add item
    </Button>

    <ListGroup>
      <TransitionGroup className = "shopping-1ist">
         {items.map( ({_id, name}) => (
           <CSSTransition key={_id} timeout={500} classNames="fade">
                <ListGroupItem >
                  <Button className="remove-btn" color="danger"
                   onClick= {() => {
                    const selecteditems = items.filter( item => item._id != _id);                    console.log(selecteditems);
                    fetch(`http://localhost:5000/api/items/${_id}`, {
                      method: 'DELETE',
                      headers: {
                        'Content-Type': 'application/json',
                      },
                    })
                    .then(res => {
                      console.log(res)
                      if (res.statusText=="OK") {
                        setitems(selecteditems);
                      } else {
                        console.log("error in deleting")
                      }
                    })
                    }}>
                     x
                    </Button> 
                    {name} </ListGroupItem>
           </CSSTransition>
         )
         )}
        </TransitionGroup>
    </ListGroup>

</Container>
);
}

export default ShoppingList;