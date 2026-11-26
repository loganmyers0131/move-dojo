import { moves } from './data/loadMoves'

function App() {
  return (
    <main>
    <h1>Move Dojo</h1>
    <table>
      <thead>
        <tr>
          <th>Input</th>
          <th>Name</th>
          <th>Startup</th>
          <th>Block</th>
          <th>Hit</th>
        </tr>
      </thead>
      <tbody>
        {moves.map((m) => (
          <tr key={m.id}>
            <td>{m.input}</td>
            <td>{m.name}</td>
            <td>{m.startup}</td>
            <td>{m.block}</td>
            <td>{m.hit}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </main>
  )
}

export default App
