import "./App.css"

const App = () => {
  const brandName = "Brand Sip | brandsip.site";
  const warning = "This site is incomplete plaese wait till it completes sorry for your inconvenient!"
  document.title = brandName;
  return (
    <div>
      {warning}
    </div>
  )
}

export default App