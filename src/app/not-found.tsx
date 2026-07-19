import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <p className="eyebrow">Erreur 404</p>
      <h1 className="title mb-4">Cette page n’existe pas</h1>
      <p className="lead mb-8">La page que vous cherchez a peut-être été déplacée ou n’existe plus.</p>
      <Link href="/" className="btn btn-primary">Retour à l’accueil</Link>
    </section>
  );
}
