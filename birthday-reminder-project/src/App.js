import React, { useState } from 'react';
import data from './data';
import List from './List';
import { Button, Typography } from '@mui/material';





function App() {
  const [people, setPeople] = useState(data)
  return (
   
  <main>
        <section className='container'>
                <Typography variant='h3'>{people.length} birthdays today</Typography>
                <List people={people}  />
                <Button variant='contained' onClick={() => setPeople([])} >Clear All</Button>
                {/* <Button variant='contained' onClick={() => console.log('you clicked me ')} >Clear All</Button> */}
        </section>
  </main>
  
  );
}

export default App;