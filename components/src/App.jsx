import Card from "./component/card"

const App = () => {
  return (
    <>
      <div className="cards">
        {Card()}
        {Card()}
        {Card()}
        {Card()}

      </div>
    </>
  )
}

export default App
