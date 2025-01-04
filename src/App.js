
import './App.css';


function Header () {
    return (
        <div>
            <h2>Header</h2>
            <Title/>
        </div>
    )
}

function Footer() {
    return (
        <div>
            <h2>Footer</h2>
            <Title/>
        </div>
    )
}
function Content() {
    return (
        <div>
            <h2>Content</h2>
            <Title/>
        </div>
    )
}
function Title() {
    return (
        <div>
            <p>Title</p>
        </div>
    )
}
function App() {
  return (
    <div className="App">
        <Header/>
        <Content/>
        <Footer/>
    </div>
  );
}

export default App;
