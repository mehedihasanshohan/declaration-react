// import './App.css'
import Form from './component/Form'
import './style.css'

  const statuses = [ 'empty', 'typing', 'submitting', 'success', 'error'];

function App() {

  return (
    <>

        {
          statuses.map((status) => (
            <Form key={status} status={status}></Form>
          ))
        }

    </>
  )
}

export default App
