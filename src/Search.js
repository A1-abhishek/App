// import React, { useState } from 'react';
import { InputBase, IconButton } from '@mui/material';
import { Search as SearchIcon2 } from '@mui/icons-material';


// const SearchComponent = () => {
//   const [query, setQuery] = useState('');
//   const [results, setResults] = useState([]);

//   const data = [
//     "Straberry",
//     "Tomato",
//     "Apple",
  
//   ];

//   const handleInputChange = (e) => {
//     const query = e.target.value.toLowerCase();
//     setQuery(query);
//     const filteredResults = searchAlgorithm(query, data);
//     setResults(filteredResults);
//   };

//   const searchAlgorithm = (query, data) => {
//     return data.filter(item => item.toLowerCase().includes(query));
//   };

//   return (
//     <div>
//      <IconButton color="inherit" aria-label="search">
// 	     <SearchIcon2 sx={{  }}/>
// 	    </IconButton>
// 	    <InputBase   value={query}
//         onChange={handleInputChange} id='inp' placeholder="Search..." sx={{ borderRadius:4, padding:0.5, color: 'inherit', border:'1px solid #88b2dd', width:500 }} />	  
  
//       {/* <input
//         type="text"
//         value={query}
//         onChange={handleInputChange}
//         placeholder="Search..."
//       /> */}
//       <div id="searchResults">
//         {results.length === 0 ? (
//           <p>No results found</p>
//         ) : (
//           results.map((result, index) => (
//             <div key={index} className="result">
//               {result}
//             </div>
//           ))
//         )}
//       </div> 
//     </div>
//   );
// };

// export default SearchComponent;


import React, { useState } from 'react';
import Card from './Card1';
import { Container, TextField, Grid, Box } from '@mui/material';

const cardData = [
  {
    title: 'Tomato',
    image: 'https://plus.unsplash.com/premium_photo-1708971732799-649f5526ad73?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Tomatoes are a rich source of vitamins and minerals.'
  },
  {
    title: 'Apple',
    image: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-1.2.1&q=80&w=1080',
    description: 'Apples are nutritious and good for health.'
  },
  {
    title: 'Banana',
    image: 'https://images.unsplash.com/photo-1574226516831-e1dff420e8b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-1.2.1&q=80&w=1080',
    description: 'Bananas are rich in potassium and provide instant energy.'
  }
];

function Search() {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value.toLowerCase());
  };

  const filteredCards = cardData.filter(card =>
    card.title.toLowerCase().includes(query)
  );

  return (
    <Container>
     <IconButton color="inherit" aria-label="search">
 	     <SearchIcon2 sx={{  }}/>
 	    </IconButton>
  <InputBase   value={query}
     onChange={handleInputChange} id='inp' placeholder="Search..." sx={{ borderRadius:4, padding:0.5, color: 'inherit', border:'1px solid #88b2dd', width:500 }} />	  
  
      {/* <TextField
        label="Search"
        variant="outlined"
        fullWidth
        margin="normal"
        onChange={handleInputChange}
      /> */}
      
      {/* <Grid container spacing={3}>
        {filteredCards.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              title={card.title}
              image={card.image}
              description={card.description}
            />
          </Grid>
        ))}
      </Grid> */}
      {/* <Box> <Card/></Box> */}
    </Container>
   
   
  );
}

export default Search;

