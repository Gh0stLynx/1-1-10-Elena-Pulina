import Header from "./components/Header"
import Input from "./components/Input";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="todoapp">
      <Header />
      <section>
        <Input/>
        <TodoList/>
        <Footer/>
      </section>
    </div>
  );
}

export default App;
