// import React, {useState} from 'react';   // for create-react-app, etc

const {useState} = React;   // for codepen, jsbin, jsfiddle etc.

function StarRating({count, value, 
    inactiveColor='#ddd',
    size=24,
    activeColor='#f00', onChange}) {

  // short trick 
  const stars = Array.from({length: count}, () => '🟊')

  // Internal handle change function
  const handleChange = (value) => {
    onChange(value + 1);
  }

  return (
    <div>
      {stars.map((s, index) => {
        let style = inactiveColor;
        if (index < value) {
          style=activeColor;
        }
        return (
          <span className={"star"}  
            key={index}
            style={{color: style, width:size, height:size, fontSize: size}}
            onClick={()=>handleChange(index)}>{s}</span>
        )
      })}
      {value}
    </div>
  )
}


function StarRatingDemo() {
  // Get the rating from a db if required.
  // The value 3 is just for testing.
  const [rating, setRating] = useState(3);

  const handleChange = (value) => {
    setRating(value);
  }
  return (
    <div>
      <h2>Star Rating Demo</h2>

     <StarRating 
       count={5}
       size={40}
       value={rating}
       activeColor ={'red'}
       inactiveColor={'#ddd'}
       onChange={handleChange}  />
    </div>
  )
}

const rootElement = document.querySelector("#root");
ReactDOM.render(<StarRatingDemo />, rootElement);  
 

