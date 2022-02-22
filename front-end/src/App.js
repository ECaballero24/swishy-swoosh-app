import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";



function App(){
  return(
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/sneakers" element={<Index />} />
            <Route path="/*" element={<FourOFour />} />
          </Routes>
        </main>
      </Router>
    </div>
  )

}




export default App;








// import axios from "axios";
// import { useState, useEffect } from "react";
// const API = process.env.REACT_APP_API_URL;

// console.log(API);
// function App() {
//   const [days, setDays] = useState([]);
//   useEffect(() => {
//     axios
//       .get(`${API}/test`)
//       .then(
//         (response) => {
//           setDays(response.data);
//         },
//         (error) => console.log("get", error)
//       )
//       .catch((c) => console.warn("catch", c));
//   }, []);
//   return (
//     <div>
//       <ul>
//         {days.map((day) => (
//           <li key={day.name}>{day.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;
