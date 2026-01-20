import "./App.css"

const App = () => {
  const brandName = "BSDK Vikas";
  const warning = "This site is incomplete plese wait till it completes!"
  document.title = brandName;
  return (
    <div>
      <p className="brandName">{brandName}</p>
      <p className="warning">{warning}</p>
    </div>
  )
}

export default App