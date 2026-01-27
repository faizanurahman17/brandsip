import "./App.css"

const App = () => {
  const brandName = "Brand Sip | brandsip.site";
  const warning = "This website is incomplete; please wait for it to be completed. We apologize for the inconvenience!"
  document.title = brandName;
  return (
    <div>
      {warning}
    </div>
  )
}

export default App