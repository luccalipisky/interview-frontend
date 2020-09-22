import React from 'react';

/* THE FIX STARTS HERE */

// state data for 3 counters
// const data = [
//   { id: 1, value: 0 },
//   { id: 2, value: 0 },
//   { id: 3, value: 0 },
// ];

// Counter Component
// const Counter = ({ value, onIncrement, onDecrement }) => {
//   return (
//     <div className="d-flex my-2">
//       <strong>{value}</strong>
//       <div className="ml-2">
//         <button onClick = {onDecrement} className="btn btn-danger mr-1">-</button>
//         <button onClick = {onIncrement} className="btn btn-success">+</button>
//       </div>
//     </div>
//   );
// };

const Counter = ({ value, onChange }) => {
  return (
    <div className="d-flex my-2">
      <strong>{value}</strong>
      <div className="ml-2">
        <button onClick = {onChange} value = 'minus' className="btn btn-danger mr-1">-</button>
        <button onClick = {onChange} value = 'plus' className="btn btn-success">+</button>
      </div>
    </div>
  );
};




const TotalValues = ({sumValues}) => {
  return (
    <div>
      <h5> TOTAL : {sumValues} </h5>
    </div>
  )
}


const GroupOfCounters = () => {

  const [data, setData] = React.useState([
    { id: 1, value: 0 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
    { id: 4, value: 0 },
  ]);

  function incrOrDecr (n, i, e) {
    if (e.target.value === 'plus'){ 
    let dataCopy = [...data]
    dataCopy[i].value += n;
    setData(dataCopy);
  }
  if (e.target.value === 'minus') {
    let dataCopy = [...data]
    dataCopy[i].value -= n;
    setData(dataCopy);
  }
  }


  
  return (
    <div>
      {data.map((counter, i) => (
        <Counter key={counter.id} value={counter.value} onChange = {(e) => incrOrDecr(7, i, e)} />
      ))}
      <TotalValues sumValues = {data.reduce(function(acc,e){ return acc + e.value; }, 0)}/>
    </div>
  );
};


// const GroupOfCounters = () => {

//   const [data, setData] = React.useState([
//     { id: 1, value: 0 },
//     { id: 2, value: 0 },
//     { id: 3, value: 0 },
//     { id: 4, value: 0 },
//   ]);

//   function onDecrement (n, i) {
//     let dataCopy = [...data]
//     dataCopy[i].value -= n;
//     setData(dataCopy);
  
//   }

//   function onIncrement (n, i) {
//     let dataCopy = [...data]
//     dataCopy[i].value += n;
//     setData(dataCopy);
//   }
  
//   return (
//     <div>
//       {data.map((counter, i) => (
//         <Counter key={counter.id} value={counter.value} onIncrement = {() => onIncrement(2, i)} onDecrement = {() => onDecrement(2, i)}/>
//       ))}
//       <TotalValues sumValues = {data.reduce( function(acc,e){ return acc + e.value; }, 0)}/>
//     </div>
//   );
// };

/* THE FIX ENDS HERE */



const Exercise02 = () => {
  return (
    <div className="container">
      <h2>Instructions</h2>

      <p>
        There are 2 components in this file: <strong>Counter</strong> and{' '}
        <strong>GroupOfCounters</strong>. The steps below will take you through
        modifying and adding components to change functionality and
        implementation.
      </p>

      <ol>
        <li>
          Update the <strong>Counter</strong> component to take{' '}
          <strong>onIncrement</strong> and <strong>onDecrement</strong>{' '}
          callbacks as props and ensure they update the counter's values
          independently. Each callback should take a single, integer value as a
          parameter which is the amount to increment the counter's existing
          value by.
        </li>

        <li>
          Move the global <strong>data</strong> array to the component state for
          the <strong>GroupOfCounters</strong> component.
        </li>

        <li>
          Render a fourth <strong>Counter</strong> component and ensure it's
          value is updated independently from the others.
        </li>

        <li>
          Create a <strong>Total</strong> component, which should display below
          the <strong>Counter</strong> components and always display the running
          total of all the <strong>Counter</strong> values.
        </li>

        <li>
          Make a copy of the <strong>Counter</strong> component, saving the
          original so you're instructor can view it later. Then do the
          following:
          <ol>
            <li>
              Remove the <strong>onIncrement</strong> and{' '}
              <strong>onDecrement</strong> props from the (new){' '}
              <strong>Counter</strong> component
            </li>
            <li>
              Add a single <strong>onChange</strong> callback prop that takes a
              single integer parameter — the new value for the counter.
            </li>
            <li>
              Ensure all <strong>Counter</strong> components still update and
              function independently after this change.
            </li>
          </ol>
        </li>
      </ol>

      <hr className="my-5" />

      <GroupOfCounters />
      
    </div>
  );
};

export default Exercise02;
