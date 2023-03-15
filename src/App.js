import Header from "./header/Header";
import CategoryList from "./category/CategoriesList";
import AddCategory from "./category/AddCategory";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <AddCategory></AddCategory>
      <CategoryList></CategoryList>
    </div>
  );
}

export default App;
