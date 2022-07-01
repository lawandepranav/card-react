import React from 'react'
import ReactDOM from 'react-dom'
import './App.css';
import Card from './components/Card.jsx'

// function App() {
//   return (
//     <div className="App">
     
//      <div> 
//           <h1>Mobile Operating Systems</h1>
//           <ul>
//             <li>Android</li>
//             <li>Blackberry</li>
//             <li>iPhone</li>
//             <li>Windows Phone</li>
//           </ul>
//      </div>

//      <div > 
//           <h1>Mobile Manufacturers</h1>
//           <ul>
//             <li>Samsung</li>
//             <li>HTC</li>
//             <li>Micromax</li>
//             <li>Apple</li>
//           </ul>
//      </div>

      
//     </div>
//   );
// }
function App(){
  const list =[
    {
      id:'1',
    heading:"Mobile Operating System",
    list:[
        { id:'101', title:"Android"},
        { id:'102', title:"IOS"},
        { id:'103', title:"Blackberry"},
        { id:'104', title:"Windows"}
    ]
  },
  {
    id:'2',
  heading:"Mobile Manufacturers",
  list:[
      { id:'201', title:"Samsung"},
      { id:'202', title:"Apple"},
      { id:'203', title:"HTC"},
      { id:'204', title:" Nokia"}
   
  ]
}
];



return(
  <div>
{list.map((item) => {
<Card {...item} />
})}
<h1>h1</h1>

  </div>

)
}
export default App ;