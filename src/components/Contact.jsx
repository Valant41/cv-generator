export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-10 bg-white rounded shadow">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">📬 Contact</h1>

      <p className="mb-4 text-gray-700">
        Vous avez une question, une suggestion ou un retour concernant notre générateur de CV et de lettres de motivation ?
        Nous sommes à votre écoute !
      </p>

      <p className="mb-4 text-gray-700">
        Ce projet a été conçu dans un but éducatif et professionnel pour aider un maximum de personnes à créer des documents de candidature clairs et efficaces.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-800">📨 Nous contacter</h2>
      <p className="text-gray-700 mb-6">
        Vous pouvez nous envoyer un message à l’adresse suivante :
        <br />
        <a
          href="mailto:contact@votresite.com"
          className="text-blue-600 hover:underline"
        >
          valant045@hotmail.com
        </a>
      </p>

      <h2 className="text-xl font-semibold mb-2 text-gray-800">🕒 Délais de réponse</h2>
      <p className="text-gray-700">
        Nous faisons de notre mieux pour répondre dans un délai de 48 heures.
      </p>
    </div>
  );
}
