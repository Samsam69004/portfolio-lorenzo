# Portfolio Lorenzo Granjon 🎭

Portfolio professionnel de Lorenzo Granjon, comédien.

## 🎯 À propos

Site web moderne et élégant présentant les expériences professionnelles, compétences et galerie de Lorenzo Granjon, comédien professionnel.

## 🚀 Technologies

- **Next.js 16** - Framework React
- **TypeScript** - Typage statique
- **Tailwind CSS** - Styling moderne
- **Vercel** - Hébergement et déploiement

## 📦 Installation & Lancement

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build pour la production
npm run build

# Lancer en production
npm start
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

## 🎨 Personnalisation

### Couleurs
Le thème est basé sur le violet du CV (#6B46C1). Modifiable dans `app/globals.css`.

### Photos
Remplacer les placeholders dans les composants :
- `app/components/Hero.tsx` - Photo de profil
- `app/components/Gallery.tsx` - Photos professionnelles

### Contenu
Les données sont directement dans les composants pour faciliter la modification :
- `app/components/Hero.tsx` - Section d'accueil
- `app/components/About.tsx` - Profil, langues et talents
- `app/components/Experiences.tsx` - Expériences professionnelles
- `app/components/Gallery.tsx` - Photos et showreel
- `app/components/Contact.tsx` - Formulaire de contact

## 🌐 Déploiement sur Vercel

### Option 1 : Via l'interface web
1. Pusher le code sur GitHub
2. Connecter le repository sur [Vercel](https://vercel.com)
3. Vercel détectera automatiquement Next.js et déploiera le site

### Option 2 : Via CLI
```bash
npm i -g vercel
vercel
```

## 📧 Contact

Lorenzo Granjon - lorenzo.granjon@hotmail.com

---

Développé avec ❤️ pour Lorenzo Granjon
