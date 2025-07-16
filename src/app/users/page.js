export default function UserPage({ params }) {
  const { id } = params

  return (
    <div>
      <h1>Page utilisateur</h1>
      <p>Paramètre ID : {id}</p>
    </div>
  )
}