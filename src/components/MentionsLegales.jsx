export default function MentionsLegales() {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded shadow mt-6">
      <h1 className="text-2xl font-bold mb-4">Mentions légales</h1>

      <p className="mb-2">
        <strong>Éditeur du site :</strong> <br />
        Nom : Valentin (particulier) <br />
        Adresse : non communiquée (résidence privée) <br />
        Email : valant045@hotmail.com<br />
      </p>

      <p className="mb-2">
        <strong>Hébergement :</strong> <br />
        Ce site est hébergé par Vercel Inc. <br />
        Adresse : 340 S Lemon Ave #4133, Walnut, CA 91789, USA <br />
        Site : <a href="https://vercel.com" className="text-blue-600 underline">vercel.com</a>
      </p>

      <p className="mb-2">
        <strong>Propriété intellectuelle :</strong> <br />
        Le contenu de ce site (textes, images, fonctionnalités) est protégé par le droit d’auteur. Toute reproduction, totale ou partielle, sans autorisation préalable est interdite.
      </p>

      <p className="mb-2">
        <strong>Responsabilité :</strong> <br />
        L’éditeur ne peut être tenu responsable de l’utilisation des informations ou outils mis à disposition sur ce site.
      </p>

      <p className="mb-2 text-sm text-gray-500">
        Ces mentions légales sont susceptibles d’évoluer en cas de changement de statut juridique.
      </p>
    </div>
  );
}
