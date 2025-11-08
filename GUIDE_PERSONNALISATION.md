# Guide de Personnalisation - Portfolio Lorenzo Granjon

## 🖼️ Ajouter les Photos

### Photo de profil (Hero section)
**Fichier :** `app/components/Hero.tsx`

Remplacer la section placeholder (lignes 10-17) par :
```tsx
<div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-2xl" style={{ border: '6px solid #6B46C1' }}>
  <Image
    src="/images/lorenzo-profile.jpg"
    alt="Lorenzo Granjon"
    fill
    className="object-cover"
    priority
  />
</div>
```

### Photos de la galerie
**Fichier :** `app/components/Gallery.tsx`

1. Placer les photos dans le dossier `public/images/gallery/`
2. Modifier le tableau `images` (lignes 6-13) :
```tsx
const images = [
  { id: 1, src: '/images/gallery/photo1.jpg', title: 'Naufrages', category: 'Scène' },
  { id: 2, src: '/images/gallery/photo2.jpg', title: 'Au Temps du Désert', category: 'Scène' },
  // etc...
];
```

3. Remplacer le placeholder (lignes 53-61) par :
```tsx
<Image
  src={image.src}
  alt={image.title}
  fill
  className="object-cover"
/>
```

## 🎬 Ajouter une Vidéo Showreel

**Fichier :** `app/components/Gallery.tsx` (lignes 70-85)

### Option 1 : Vidéo YouTube
```tsx
<div className="aspect-video rounded-2xl shadow-xl overflow-hidden">
  <iframe
    width="100%"
    height="100%"
    src="https://www.youtube.com/embed/VIDEO_ID"
    title="Showreel Lorenzo Granjon"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
</div>
```

### Option 2 : Vidéo locale
Placer la vidéo dans `public/videos/showreel.mp4` :
```tsx
<video
  className="w-full h-full rounded-2xl shadow-xl"
  controls
  poster="/images/showreel-poster.jpg"
>
  <source src="/videos/showreel.mp4" type="video/mp4" />
  Votre navigateur ne supporte pas les vidéos.
</video>
```

## 📧 Configurer le Formulaire de Contact

**Fichier :** `app/components/Contact.tsx`

Actuellement, le formulaire est en mode simulation. Pour le rendre fonctionnel :

### Option 1 : Utiliser Formspree (gratuit)
1. Créer un compte sur [formspree.io](https://formspree.io)
2. Créer un nouveau formulaire
3. Modifier la fonction `handleSubmit` (ligne 17) :

```tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setStatus('sending');

  try {
    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } else {
      setStatus('error');
    }
  } catch (error) {
    setStatus('error');
  }

  setTimeout(() => setStatus(''), 3000);
};
```

### Option 2 : API Route Next.js
Créer `app/api/contact/route.ts` et utiliser un service d'email (SendGrid, Resend, etc.)

## 🎨 Modifier les Couleurs

**Fichier :** `app/globals.css`

Changer les variables CSS :
```css
:root {
  --primary: #6B46C1;        /* Couleur principale (violet) */
  --primary-dark: #5a3aa3;   /* Violet foncé pour hover */
  --primary-light: #8b67d6;  /* Violet clair */
  --secondary: #f5f5f5;      /* Gris clair pour les fonds */
  --accent: #e8e0f5;         /* Accent violet pâle */
}
```

## 🔗 Ajouter des Réseaux Sociaux

**Fichier :** `app/components/Footer.tsx` (lignes 13-26)

Ajouter les liens :
```tsx
<div className="flex gap-6">
  {/* LinkedIn */}
  <a href="https://linkedin.com/in/lorenzo-granjon" target="_blank" rel="noopener noreferrer">
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
  </a>

  {/* Instagram */}
  <a href="https://instagram.com/lorenzo.granjon" target="_blank" rel="noopener noreferrer">
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  </a>

  {/* Email */}
  <a href="mailto:lorenzo.granjon@hotmail.com">
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
    </svg>
  </a>
</div>
```

## 🚀 Déploiement sur Vercel

1. **Créer un repository GitHub** :
```bash
git init
git add .
git commit -m "Initial commit - Portfolio Lorenzo Granjon"
git branch -M main
git remote add origin https://github.com/USERNAME/portfolio-lorenzo.git
git push -u origin main
```

2. **Déployer sur Vercel** :
   - Aller sur [vercel.com](https://vercel.com)
   - Cliquer sur "New Project"
   - Importer le repository GitHub
   - Vercel détectera automatiquement Next.js
   - Cliquer sur "Deploy"

3. **Configurer un domaine personnalisé** (optionnel) :
   - Dans les settings du projet sur Vercel
   - Aller dans "Domains"
   - Ajouter votre domaine (ex: lorenzogranjon.com)

## 📝 Notes Importantes

- **Images optimisées** : Next.js optimise automatiquement les images. Format recommandé : JPG/WebP
- **Performance** : Le site est déjà optimisé pour le SEO et les performances
- **Responsive** : Testé sur mobile, tablette et desktop
- **Accessibilité** : Pensez à ajouter des alt text descriptifs sur toutes les images

## 🆘 Support

Pour toute question sur la personnalisation, contacte-moi ou consulte la documentation Next.js : https://nextjs.org/docs
