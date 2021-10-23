import React from 'react';
import firestoreDb from "./index";

function App() {

  const click =()=>{
    console.log('ok')

    firestoreDb.collection('new').doc().set({ 'ok ':'ok'
    }).then(()=>{
      alert('success')
    })

  }



  return (
    <div className="App" onClick={click}>
    ok

    </div>
  );
}

export default App;
