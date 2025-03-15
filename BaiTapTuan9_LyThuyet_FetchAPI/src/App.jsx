// App.jsx
import DogListFetch from "./components/DogListFetch";
import DogListAxios from "./components/DogListAxios";
import "./App.css";
import PostListFetch from "./components/PostListFetch";
import PostListAxios from "./components/PostListAxios";

function App() {
  // return (
  //   <div className="app">
  //     <header className="app-header">
  //       <h1>Ứng dụng Dog API 🐾</h1>
  //     </header>
  //     <main className="app-main">
  //       {/* <section>
  //         <DogListFetch />
  //       </section> */}
  //       <section>
  //         <DogListAxios />
  //       </section>
  //     </main>
  //   </div>
  // );
  return (
    <div className="app">
      <header className="app-header">
        <h1>Ứng dụng Fetch API</h1>
      </header>
      <main className="app-main">
        <section>
          <PostListFetch />
        </section>
        <section>
          <PostListAxios />
        </section>
      </main>
    </div>
  );
}

export default App;