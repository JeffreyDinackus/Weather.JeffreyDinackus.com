import './App.css';

const Navbar = () => {
  return (<nav
  className="relative flex w-full flex-wrap items-center justify-between bg-[#FBFBFB] py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:py-4">
  <div className="flex w-full flex-wrap items-center justify-between px-3">
    <div class="ml-2">
      <p className="text-xl text-neutral-800 dark:text-neutral-200">Weather.JeffreyDinackus.com</p
      >
    </div>
  </div>
</nav>
);

}


function ApiKeys() {
  return (
    <div>
      <p className="text-3xl font-bold underline"> xd</p>
      <input type="text" />
    </div>);
}


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <ApiKeys></ApiKeys>
    </div>
  );
}

export default App;
