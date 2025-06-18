export default function APropos() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 bg-white rounded-2xl shadow-lg mt-10">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-900">À propos</h1>

      <p className="mb-6 text-gray-800 text-lg leading-relaxed">
        Bienvenue sur notre plateforme de génération de <strong>CV</strong> et de <strong>lettres de motivation</strong>.  
        Ce projet a été lancé avec une mission simple : permettre à chacun de créer rapidement des documents de candidature <strong>professionnels, clairs et efficaces</strong>.
      </p>

      <p className="mb-6 text-gray-800 text-lg leading-relaxed">
        Nous savons à quel point la rédaction d’un bon CV ou d’une lettre de motivation peut être stressante, surtout lorsqu’on débute ou qu’on manque de temps.
        C’est pourquoi ce site propose une solution <strong>gratuite, sans inscription</strong> et accessible à tous.
      </p>

      <p className="mb-6 text-gray-800 text-lg leading-relaxed">
        Grâce à l’<strong>intelligence artificielle</strong>, vous pouvez générer automatiquement une lettre de motivation personnalisée à partir de quelques informations simples.
        Le tout accompagné d’un aperçu <strong>PDF en temps réel</strong> de votre CV, prêt à être téléchargé.
      </p>

      <p className="mb-6 text-gray-800 text-lg leading-relaxed">
        ⚠️ Aucune donnée personnelle n’est conservée : tout est traité <strong>localement dans votre navigateur</strong>.  
        Nous avons fait le choix de la confidentialité totale, pour garantir un service <strong>respectueux de votre vie privée</strong>.
      </p>

      <p className="mb-6 text-gray-800 text-lg leading-relaxed">
        Ce site est un <strong>projet personnel</strong>, né d'une envie de contribuer à l'amélioration de l'accès aux outils de recherche d’emploi.
        Que vous soyez <em>étudiant</em>, en <em>reconversion</em> ou <em>professionnel</em> en quête d’un nouveau défi, ce service est là pour vous accompagner.
      </p>

      <p className="text-gray-800 text-lg leading-relaxed">
        Pour toute question, suggestion ou collaboration, vous pouvez nous écrire via la page <a href="/contact" className="text-blue-600 hover:underline">Contact</a>.
        <br />
        Merci d’utiliser notre générateur, et <strong>bonne chance dans vos démarches !</strong>
      </p>
    </div>
  );
}
