//import './App.css';
import Home from './components/Home';

function App() {

  const images = [
        {imgUrl:"https://images.unsplash.com/photo-1584759726383-11001cad8059?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80", title: "Lorem ipsum dolor", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus dolorem ipsa ullam dolore! Ex necessitatibus quo id reprehenderit totam, natus, odit incidunt officia, asperiores maiores eius dolor nobis alias dicta?"},

        {imgUrl:"https://images.unsplash.com/photo-1661091856780-88d7d4091c83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80", title: "Lorem ipsum dolor", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus dolorem ipsa ullam dolore! Ex necessitatibus quo id reprehenderit totam, natus, odit incidunt officia, asperiores maiores eius dolor nobis alias dicta?"},

        {imgUrl:"https://images.unsplash.com/photo-1575655971373-a38566870b94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80", title: "Lorem ipsum dolor", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus dolorem ipsa ullam dolore! Ex necessitatibus quo id reprehenderit totam, natus, odit incidunt officia, asperiores maiores eius dolor nobis alias dicta?"
    },
        {imgUrl:"https://images.unsplash.com/photo-1596350327329-936d8e22d1fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80", title: "Lorem ipsum dolor", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus dolorem ipsa ullam dolore! Ex necessitatibus quo id reprehenderit totam, natus, odit incidunt officia, asperiores maiores eius dolor nobis alias dicta?"
    },
    ]

  
  return (
    <div className="App">
      <Home images={images}/>
    </div>
  );
}

export default App;
