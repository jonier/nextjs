import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Accueil de l’application</h1>

      <ul className="space-y-4 max-w-md mx-auto">
        <li>
          <Link
            href="/users/12"
            className="block bg-white shadow-md rounded-lg p-4 text-blue-600 hover:bg-blue-50 hover:underline"
          >
            Aller à la page Utilisateur 12
          </Link>
        </li>

        <li>
          <Link
            href="/cookie-test"
            className="block bg-white shadow-md rounded-lg p-4 text-green-600 hover:bg-green-50 hover:underline"
          >
            Tester les cookies
          </Link>
        </li>

        <li>
          <Link
            href="/calculateurDAge"
            className="block bg-white shadow-md rounded-lg p-4 text-purple-600 hover:bg-purple-50 hover:underline"
          >
            Calculateur d’âge
          </Link>
        </li>
      </ul>
    </main>
  )
}
