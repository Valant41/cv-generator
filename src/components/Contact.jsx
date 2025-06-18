export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 bg-white rounded-2xl shadow-lg mt-10">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-900">📬 Nous contacter</h1>

      <p className="mb-6 text-gray-800 text-lg leading-relaxed">
        Une question, une suggestion ou un retour à partager concernant notre générateur de CV et de lettres de motivation ? 
        Nous sommes ravis de vous lire !
      </p>

      <p className="mb-6 text-gray-800 text-lg leading-relaxed">
        Ce projet a été conçu avec passion pour aider chacun à créer des candidatures percutantes, gratuitement et simplement. 
        Si vous rencontrez un bug ou si vous avez des idées d'amélioration, n'hésitez surtout pas à nous écrire.
      </p>

      <div className="bg-gray-50 p-6 rounded-xl shadow-inner">
        <h2 className="text-2xl font-semibold mb-3 text-gray-900">📨 Adresse e-mail</h2>
        <p className="text-gray-700 mb-4">
          Vous pouvez nous contacter directement par e-mail à :
        </p>
        <a
          href="mailto:valant045@hotmail.com"
          className="text-blue-600 font-medium hover:underline break-all"
        >
          valant045@hotmail.com
        </a>
      </div>

      <div className="mt-8 bg-gray-50 p-6 rounded-xl shadow-inner">
        <h2 className="text-2xl font-semibold mb-3 text-gray-900">🕒 Délais de réponse</h2>
        <p className="text-gray-700">
          Nous répondons à tous les messages dans un délai maximum de 48 heures.
        </p>
      </div>
    </div>
  );
}
