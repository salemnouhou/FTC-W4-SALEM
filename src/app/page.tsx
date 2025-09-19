
/**
 * Page d'accueil principale de l'application Spend.In
 * 
 * Structure de la page :
 * 1. Hero Section - En-tête avec navigation et titre principal
 * 2. Benefits - Avantages de la plateforme
 * 3. HowItWorks - Processus en 3 étapes
 * 4. SuccessStories - Témoignages de réussite
 * 5. Testimonials - Avis clients
 * 6. Pricing - Plans tarifaires
 * 7. CTA Section - Appel à l'action
 * 8. Footer - Pied de page
 * 
 * Tous les composants sont importés depuis le fichier index.tsx centralisé
 */
export default function Home() {
  return (
   <>
   <div className="flex justify-center items-center min-h-screen bg-gray-100">
    <h1 className="text-4xl font-bold text-gray-800">The French Tototte</h1>
   </div>
   </>
  );
}
