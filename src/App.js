// import logo from './logo.svg';
// import './App.css';
// import CopyApp from './CopyApp';
import Header from './Header';
import Sidebar from './Sidebar';
import YoutubeCard from './YoutubeCard';

function App() {
  return (
    <div className = "Example_React_app">
      <Header/>
      <div>
      <Sidebar/>
      </div>
      
      <div
      style ={{
        display:"flex",
        flexWrap: "wrap"
      }}
      >
      <YoutubeCard/><YoutubeCard/>
      <YoutubeCard/><YoutubeCard/>
      <YoutubeCard/><YoutubeCard/>
      <YoutubeCard/><YoutubeCard/>
      {/* <YoutubeCard/><YoutubeCard/>
      <YoutubeCard/><YoutubeCard/>
      <YoutubeCard/><YoutubeCard/>
      <YoutubeCard/><YoutubeCard/> */}
      </div>
    </div>
    
  );
}

export default App;
