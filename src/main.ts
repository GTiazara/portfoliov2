import "./portfolio.css";
import {
  createIcons,
  ArrowUpRight,
  ArrowDown,
  ArrowUp,
  Github,
  Gitlab,
  Linkedin,
  Download,
  Menu,
  X,
  Globe2,
  MapPin,
  Layers,
  Code2,
  Database,
  ExternalLink,
  FileText,
} from "lucide";
import { projects, categories, type Category } from "./catalog";

const icon = (name: string) =>
  `<i data-lucide="${name}" aria-hidden="true"></i>`;
const external = 'target="_blank" rel="noopener noreferrer"';
const base = import.meta.env.BASE_URL;
const email = "gaetan.tiazara@outlook.fr";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <a class="skip-link" href="#projets">Aller au contenu</a>
  <header class="header"><div class="container header-inner">
    <a class="wordmark" href="#accueil" aria-label="Gaëtan Tiazara, accueil"><span class="monogram">gt<span>.</span></span><span class="wordmark-label">GAËTAN TIAZARA<span>GÉOMATIQUE & DÉVELOPPEMENT</span></span></a>
    <button class="menu-toggle icon-button" aria-label="Ouvrir le menu" aria-expanded="false" aria-controls="navigation">${icon("menu")}</button>
    <nav id="navigation" aria-label="Navigation principale"><a class="nav-link active" href="#projets">Projets</a><a class="nav-link" href="#parcours">Parcours</a><a class="nav-link" href="#competences">Compétences</a><a class="nav-contact" href="#contact">Échangeons ${icon("arrow-up-right")}</a></nav>
  </div></header>
  <main id="accueil">
    <section class="intro container" aria-labelledby="intro-title">
      <div class="eyebrow"><span class="small-cross">+</span> ENTRE DONNÉES, CODE ET TERRITOIRES</div>
      <h1 id="intro-title">Gaëtan Tiazara<span class="green">.</span></h1>
      <div class="intro-bottom"><div class="intro-copy"><p class="intro-role">Géomatique & systèmes d’information</p><p class="intro-description">Je conçois des outils qui relient données géographiques, analyse spatiale et développement d’applications. Découvrez une sélection de projets réalisés pendant ma formation d’ingénieur à l’ENSG.</p><div class="intro-actions"><button class="button-primary cv-open" type="button" data-cv-viewer="fr" aria-haspopup="dialog">Consulter mon CV ${icon("file-text")}</button><button class="text-link cv-open" type="button" data-cv-viewer="en" aria-haspopup="dialog">English CV ${icon("file-text")}</button><a class="text-link" href="#projets">Parcourir les projets ${icon("arrow-down")}</a></div></div><div class="intro-aside"><div class="intro-fact"><span>FORMATION</span><strong>Cycle ingénieur ENSG</strong><small>Géomatique · 2020–2023</small></div><div class="intro-fact"><span>SPÉCIALISATION</span><strong>Technologies des systèmes d’information</strong></div></div></div>
      <div class="intro-foot"><span>GÉOMATIQUE <b>×</b> DÉVELOPPEMENT <b>×</b> VISUALISATION</span><span>PORTFOLIO / SÉLECTION DE PROJETS</span></div>
    </section>
    <section class="projects-section" id="projets" aria-labelledby="projects-title"><div class="container">
      <div class="section-heading"><div><span class="eyebrow section-number">01 / EXPLORATIONS</span><h2 id="projects-title">Une idée, du code,<br>un projet concret<span class="green">.</span></h2></div><p>Explorer, comprendre, construire.<br>Des projets pour explorer les données et les territoires.</p></div>
      <div class="filter-bar"><div class="filters" role="group" aria-label="Filtrer les projets par domaine">${categories.map((category, index) => `<button class="filter${index === 0 ? " selected" : ""}" data-category="${category}" aria-pressed="${index === 0}">${category}${index === 0 ? `<span>${projects.length.toString().padStart(2, "0")}</span>` : ""}</button>`).join("")}</div><span class="project-count" aria-live="polite">${projects.length} projets</span></div>
      <div class="project-grid" id="project-grid"></div>
      <div class="projects-foot"><span>${icon("gitlab")} Le code est aussi une façon de partager.</span><a href="https://gitlab.com/GTiazara" ${external}>Tous mes dépôts GitLab ${icon("arrow-up-right")}</a></div>
    </div></section>
    <section class="about-section container" id="parcours" aria-labelledby="about-title">
      <div class="about-intro"><span class="eyebrow section-number">02 / PARCOURS</span><h2 id="about-title">La curiosité<br>comme boussole<span class="green">.</span></h2><p>Mon parcours relie les sciences de la Terre, l’information géographique et la conception de systèmes d’information.</p><p>À l’ENSG, j’ai exploré toute la chaîne de la donnée : l’acquérir, l’analyser, la représenter et la rendre accessible.</p><button class="text-link cv-open" type="button" data-cv-viewer="fr" aria-haspopup="dialog">Consulter mon CV ${icon("file-text")}</button></div>
      <ol class="timeline">
        <li>
          <span class="timeline-date">Septembre 2020 — septembre 2023</span>
          <h3>Cycle ingénieur en géomatique</h3>
          <span class="timeline-subtitle">ENSG Géomatique · Champs-sur-Marne, Île-de-France</span>
          <p>Formation d’ingénieur géomaticien en trois ans, avec le statut d’élève fonctionnaire. Spécialisation de troisième année en technologies des systèmes d’information (TSI).</p>
          <details class="timeline-detail" open>
            <summary>Première année · programme</summary>
            <div class="timeline-competencies">
              <div class="timeline-competency"><h4>Géomatique</h4></div>
              <div class="timeline-competency"><h4>Capteur et acquisition</h4><ul><li>Photogrammétrie, de la planification des vols à la génération de nuages de points.</li><li>Imagerie de télédétection : images satellite et radar.</li><li>Acquisition de points LiDAR et notions sur les images spatiales.</li></ul></div>
              <div class="timeline-competency"><h4>Géodésie</h4><ul><li>Systèmes de référence et transformations de coordonnées.</li><li>Géométrie différentielle des ellipsoïdes et projections.</li><li>Projections, représentation conforme, GNSS et topométrie.</li></ul></div>
              <div class="timeline-competency"><h4>Cartographie</h4><ul><li>Sémiologie graphique.</li><li>Conception et production cartographiques, de la demande à la livraison.</li><li>Généralisation cartographique.</li></ul></div>
              <div class="timeline-competency"><h4>Programmation · informatique · modélisation</h4><ul><li>Algorithmique, théorie des graphes et moindres carrés.</li><li>Modélisation UML et programmation orientée objet, Java et Python.</li><li>Programmation scientifique en Python, dont l’algorithme du recuit simulé.</li><li>Apprentissage automatique appliqué à l’imagerie, supervisé et non supervisé.</li></ul></div>
              <div class="timeline-competency"><h4>Gestion de projet</h4><ul><li>Méthodes agiles et framework Scrum.</li><li>Git et GitLab.</li></ul></div>
              <div class="timeline-competency"><h4>Initiation aux sciences humaines et à la communication</h4><ul><li>Initiation au droit et recherche d’informations juridiques.</li><li>Géographie physique et humaine.</li><li>Communication : réalisation de posters et de vidéos d’animation.</li></ul></div>
              <div class="timeline-competency"><h4>Stage ouvrier · IGN</h4><ul><li>Trois mois à l’Institut national de l’information géographique et forestière.</li><li>Mise en pratique de la télédétection, de la topométrie et de la photogrammétrie.</li></ul></div>
            </div>
          </details>
          <details class="timeline-detail" open>
            <summary>Deuxième année · programme</summary>
            <div class="timeline-competencies">
              <div class="timeline-competency"><h4>SIG | analyse et modélisation</h4><ul><li>Programmation SIG avancée : ajout de plugins à ArcGIS et QGIS.</li><li>Analyse spatiale selon une approche géométrique.</li><li>Géostatistique et interpolation spatiale.</li></ul></div>
              <div class="timeline-competency"><h4>Traitement d’image</h4><ul><li>Points d’intérêt et mise en correspondance.</li><li>Apprentissage automatique : SVM, sélection d’attributs et autres méthodes.</li><li>Traitement du signal.</li></ul></div>
              <div class="timeline-competency"><h4>Système d’information : SI</h4><ul><li>Réseaux.</li><li>Modélisation des systèmes d’information avec UML et design patterns.</li></ul></div>
              <div class="timeline-competency"><h4>Géodésie</h4><ul><li>Filtre de Kalman.</li><li>Altitudes.</li><li>Systèmes de référence et projections.</li></ul></div>
              <div class="timeline-competency"><h4>Production photogrammétrique</h4><ul><li>Photogrammétrie et création d’orthophotos.</li><li>Modèles numériques de terrain (MNT) et de surface (MNS).</li><li>LiDAR et imagerie satellitaire : images raster et radar.</li></ul></div>
              <div class="timeline-competency"><h4>Base de données géographique et web mapping</h4><ul><li>PostgreSQL et PostGIS.</li><li>GeoServer, WFS et WMS.</li><li>Web mapping avec des bases de données géographiques et GeoServer.</li></ul></div>
            </div>
          </details>
          <details class="timeline-detail" open>
            <summary>Troisième année · spécialisation TSI</summary>
            <div class="timeline-competencies">
              <div class="timeline-competency"><h4>Tronc commun</h4><ul><li>Management d’équipe.</li><li>Entrepreneuriat et innovation.</li><li>Conduite du changement.</li></ul></div>
              <div class="timeline-competency"><h4>Méthode agile et méthode de développement</h4><ul><li>Implémentation du framework Scrum.</li><li>Git et CI/CD.</li><li>Analyse statique et dynamique du code.</li><li>Tests unitaires et d’intégration : Google Test, Jest et JUnit.</li></ul></div>
              <div class="timeline-competency"><h4>Architecture des systèmes d’information, technologies et informatique</h4><ul><li>Linux, lignes de commande et langage shell.</li><li>Architectures des SI distribuées et XaaS, Docker, Docker Compose, Docker Swarm.</li><li>Application de l’architecture des SI avec Docker et Docker Swarm.</li><li>Design patterns, UML, sécurité des SI et cloud computing.</li></ul></div>
              <div class="timeline-competency"><h4>Big Data et deep learning</h4><ul><li>NoSQL.</li><li>Deep learning avec PyTorch : classification sémantique et segmentation.</li></ul></div>
              <div class="timeline-competency"><h4>Modélisation IHM et 3D</h4><ul><li>Transformation de nuages de points en objets 3D.</li><li>BIM et formats standards.</li><li>OpenGL en C++ et WebGL avec Three.js.</li></ul></div>
              <div class="timeline-competency"><h4>Web</h4><ul><li>Web sémantique et JavaScript avancé.</li><li>Vue.js côté front-end ; Node.js et Express côté back-end.</li><li>JEE, Spring, Spring Boot et Hibernate.</li></ul></div>
              <div class="timeline-competency"><h4>Systèmes embarqués</h4><ul><li>Raspberry Pi et Arduino.</li></ul></div>
            </div>
          </details>
          <details class="timeline-detail" open>
            <summary>Stages, projets et responsabilités</summary>
            <ul>
              <li><strong>Mai 2021 · IGN, trois mois</strong> : stage ouvrier au sein d’une structure spécialisée en géomatique ; mise en pratique de la télédétection, de la topométrie et de la photogrammétrie.</li>
              <li><strong>Octobre 2021 · projet de recherche</strong> : superposition d’une prise de vue par drone avec une photographie aérienne ancienne.</li>
              <li><strong>Avril 2022 · GEODEV avec l’IPGP</strong> : développement d’une interface de visualisation d’observables géodésiques.</li>
              <li><strong>Mai 2022 · Institut Archipelagos, Grèce, trois mois</strong> : cartographie de Posidonia oceanica à partir de données sonar.</li>
              <li><strong>Février 2021 — février 2023 · Vertigéo, junior-entreprise de l’ENSG</strong> : chef de projet, avec deux projets suivis en 2021, puis webmaster en 2022.</li>
            </ul>
          </details>
        </li>
        <li>
          <span class="timeline-date">Août 2018 — août 2020</span>
          <h3>Classe préparatoire BCPST</h3>
          <span class="timeline-subtitle">Lycée Roland Garros · Le Tampon, La Réunion</span>
          <p>Biologie, chimie, physique et sciences de la Terre. Préparation aux concours AGRO, G2E et ENS ; admissions AGRO et G2E. Choix final : l’ENSG Géomatique en tant qu’élève fonctionnaire.</p>
        </li>
        <li>
          <span class="timeline-date">Juillet 2018</span>
          <h3>Baccalauréat scientifique S, spécialité SVT</h3>
          <span class="timeline-subtitle">Lycée Lislet Geoffroy · Saint-Denis, La Réunion</span>
          <p>Sciences de la vie et de la Terre · Mention bien.</p>
        </li>
      </ol>
    </section>
    <section class="skills-section" id="competences" aria-labelledby="skills-title"><div class="container"><div class="section-heading"><div><span class="eyebrow section-number">03 / SAVOIR-FAIRE</span><h2 id="skills-title">Des outils pour<br>donner du sens<span class="green">.</span></h2></div><p>Un socle scientifique.<br>Une approche transversale du numérique.</p></div><div class="skills-grid">
      ${[
    {
      icon: "layers",
      title: "Géomatique & données",
      description:
        "Analyser les territoires et comprendre les données spatiales.",
      tools: [
        "QGIS",
        "ArcGIS",
        "GDAL / OGR",
        "Télédétection",
        "Géostatistiques",
      ],
    },
    {
      icon: "code-2",
      title: "Développement",
      description:
        "Concevoir des applications, du navigateur au logiciel métier.",
      tools: [
        "Python",
        "JavaScript",
        "Vue.js",
        "Node.js",
        "Java / Spring",
        "C++ / Qt",
      ],
    },
    {
      icon: "globe-2",
      title: "Visualisation & 3D",
      description:
        "Rendre visible l’information, de la carte au jumeau numérique.",
      tools: ["OpenGL", "Three.js", "WebGL", "Cartographie", "BIM"],
    },
    {
      icon: "database",
      title: "Systèmes & méthodes",
      description:
        "Construire ensemble avec des méthodes et des outils adaptés.",
      tools: ["Git", "Docker", "CI/CD", "Scrum", "NoSQL", "Raspberry Pi"],
    },
  ]
    .map(
      (skill) =>
        `<article class="skill"><span class="skill-icon">${icon(skill.icon)}</span><h3>${skill.title}</h3><p>${skill.description}</p><div class="skill-tags">${skill.tools.map((tool) => `<span>${tool}</span>`).join("")}</div></article>`,
    )
    .join("")}
    </div></div></section>
    <section class="contact-section" id="contact" aria-labelledby="contact-title"><div class="container"><div class="eyebrow">04 / ET LA SUITE ?</div><div class="contact-main"><div><h2 id="contact-title">Pour me contacter et discuter<span>.</span></h2><p>Géomatique, développement ou simplement envie d’échanger ?</p><a class="email-link" href="mailto:${email}">${email} ${icon("arrow-up-right")}</a></div><a class="contact-orbit" href="mailto:${email}" aria-label="Envoyer un e-mail à Gaëtan Tiazara">${icon("arrow-up-right")}</a></div><div class="contact-social"><a href="https://github.com/GTiazara" ${external}>${icon("github")} GitHub ${icon("arrow-up-right")}</a><a href="https://gitlab.com/GTiazara" ${external}>${icon("gitlab")} GitLab ${icon("arrow-up-right")}</a><a href="https://fr.linkedin.com/in/tiazara-ga%C3%ABtan-887a95226/" ${external}>${icon("linkedin")} LinkedIn ${icon("arrow-up-right")}</a></div></div></section>
  </main>
  <footer class="footer container"><a class="monogram" href="#accueil" aria-label="Retour à l’accueil">gt<span>.</span></a><span>© ${new Date().getFullYear()} Gaëtan Tiazara</span><a href="#accueil">Retour en haut ${icon("arrow-up")}</a></footer>
  <dialog class="project-dialog" aria-labelledby="dialog-title"><button class="dialog-close icon-button" aria-label="Fermer la fiche projet">${icon("x")}</button><div id="dialog-content"></div></dialog>
  <dialog class="cv-dialog" aria-labelledby="cv-dialog-title"><div class="cv-viewer-header"><div><span class="eyebrow">DOCUMENT · ${icon("file-text")}</span><h2 id="cv-dialog-title">Curriculum vitae</h2></div><div class="cv-viewer-actions"><div class="cv-languages" role="group" aria-label="Langue du CV"><button type="button" class="cv-language selected" data-cv-lang="fr" aria-pressed="true">Français</button><button type="button" class="cv-language" data-cv-lang="en" aria-pressed="false">English</button></div><a id="cv-download" class="icon-button" href="${base}files/cv-fr.pdf" download="Gaetan-Tiazara-CV-FR.pdf" aria-label="Télécharger le CV français" title="Télécharger le CV">${icon("download")}</a><button class="cv-close icon-button" type="button" aria-label="Fermer la visionneuse">${icon("x")}</button></div></div><iframe id="cv-frame" title="CV français de Gaëtan Tiazara" src="${base}files/cv-fr.pdf"></iframe><p class="cv-fallback">La prévisualisation PDF ne s’affiche pas ? <a id="cv-open-file" href="${base}files/cv-fr.pdf" ${external}>Ouvrir le CV dans un nouvel onglet</a></p></dialog>
`;

const refreshIcons = () =>
  createIcons({
    icons: {
      ArrowUpRight,
      ArrowDown,
      ArrowUp,
      Github,
      Gitlab,
      Linkedin,
      Download,
      Menu,
      X,
      Globe2,
      MapPin,
      Layers,
      Code2,
      Database,
      ExternalLink,
      FileText,
    },
    attrs: { "stroke-width": 1.6 },
  });
const grid = document.querySelector<HTMLDivElement>("#project-grid")!;
const dialog = document.querySelector<HTMLDialogElement>(".project-dialog")!;
const cvDialog = document.querySelector<HTMLDialogElement>(".cv-dialog")!;
let previousFocus: HTMLElement | null = null;
let cvPreviousFocus: HTMLElement | null = null;

function renderProjects(category: Category = "Tous les projets") {
  const visible = projects.filter(
    (project) =>
      category === "Tous les projets" || project.categories.includes(category),
  );
  grid.innerHTML = visible
    .map(
      (project) =>
        `<article class="project-card"><button class="project-image-button ${project.visual}" data-project="${project.id}" aria-label="Découvrir le projet ${project.title}"><img src="${base}images/${project.image}" alt="${project.imageAlt}" loading="lazy" width="900" height="560"><span class="image-label">${project.label}</span><span class="image-open">${icon("arrow-up-right")}</span></button><div class="project-meta"><span>${project.domain}</span>${project.year ? `<span>${project.year}</span>` : ""}</div><button class="project-title" data-project="${project.id}"><h3>${project.title}</h3>${icon("arrow-up-right")}</button><p class="project-description">${project.summary}</p><div class="project-tags">${project.tags.map((tag) => `<span>${tag}</span>`).join("")}</div></article>`,
    )
    .join("");
  document.querySelector(".project-count")!.textContent =
    `${visible.length} projet${visible.length > 1 ? "s" : ""}`;
  refreshIcons();
}

function renderProjectContent(content: string) {
  return content
    .split(/\n\s*\n/)
    .filter((block) => block.trim())
    .map((block) => {
      const safe = block
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replace(
          /\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g,
          '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>',
        );
      return `<p>${safe.replaceAll("\n", "<br>")}</p>`;
    })
    .join("");
}

document.querySelectorAll<HTMLButtonElement>(".filter").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach((filter) => {
      const selected = filter === button;
      filter.classList.toggle("selected", selected);
      filter.setAttribute("aria-pressed", String(selected));
    });
    renderProjects(button.dataset.category as Category);
  });
});

grid.addEventListener("click", (event) => {
  const button = (event.target as Element).closest<HTMLButtonElement>(
    "[data-project]",
  );
  const project = projects.find((item) => item.id === button?.dataset.project);
  if (!project) return;
  previousFocus = button;
  document.querySelector("#dialog-content")!.innerHTML =
    `<img class="dialog-image ${project.visual}" src="${base}images/${project.image}" alt="${project.imageAlt}" width="900" height="560"><div class="dialog-body"><span class="eyebrow">${project.domain}${project.year ? ` / ${project.year}` : ""}</span><h2 id="dialog-title">${project.title}</h2>${project.work ? `<p class="dialog-work">${project.work}</p>` : ""}<div class="dialog-description">${renderProjectContent(project.description)}</div><div class="project-tags">${project.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>${project.content ? `<div class="dialog-content"><h3>Détails du projet</h3>${renderProjectContent(project.content)}</div>` : ""}${project.testimonial ? `<blockquote class="project-testimonial"><p>“${project.testimonial.text}”</p><cite>— ${project.testimonial.name}, ${project.testimonial.role}</cite></blockquote>` : ""}${project.repository || project.demo || project.source ? `<div class="dialog-links">${project.repository ? `<a class="button-primary" href="${project.repository}" ${external}>Voir le code ${icon("arrow-up-right")}</a>` : ""}${project.demo ? `<a class="text-link" href="${project.demo}" ${external}>Ouvrir le projet ${icon("external-link")}</a>` : ""}${project.source ? `<a class="text-link" href="${project.source}" ${external}>Fiche d’origine ${icon("arrow-up-right")}</a>` : ""}</div>` : ""}</div>`;
  refreshIcons();
  dialog.showModal();
  document.body.classList.add("dialog-open");
});

document
  .querySelector(".dialog-close")!
  .addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => {
  if (event.target !== dialog) return;
  const bounds = dialog.getBoundingClientRect();
  if (
    event.clientX < bounds.left ||
    event.clientX > bounds.right ||
    event.clientY < bounds.top ||
    event.clientY > bounds.bottom
  )
    dialog.close();
});
dialog.addEventListener("close", () => {
  document.body.classList.remove("dialog-open");
  previousFocus?.focus();
});

const cvFiles = {
  fr: {
    src: `${base}files/cv-fr.pdf`,
    download: "Gaetan-Tiazara-CV-FR.pdf",
    title: "CV français de Gaëtan Tiazara",
    label: "Télécharger le CV français",
  },
  en: {
    src: `${base}files/cv-en.pdf`,
    download: "Gaetan-Tiazara-CV-EN.pdf",
    title: "English CV of Gaëtan Tiazara",
    label: "Download the English CV",
  },
} as const;

function selectCv(language: keyof typeof cvFiles) {
  const file = cvFiles[language];
  const frame = document.querySelector<HTMLIFrameElement>("#cv-frame")!;
  const download = document.querySelector<HTMLAnchorElement>("#cv-download")!;
  const openFile = document.querySelector<HTMLAnchorElement>("#cv-open-file")!;
  frame.src = file.src;
  frame.title = file.title;
  download.href = file.src;
  download.download = file.download;
  download.setAttribute("aria-label", file.label);
  openFile.href = file.src;
  document.querySelectorAll<HTMLButtonElement>(".cv-language").forEach((button) => {
    const selected = button.dataset.cvLang === language;
    button.classList.toggle("selected", selected);
    button.setAttribute("aria-pressed", String(selected));
  });
}

document.querySelectorAll<HTMLButtonElement>(".cv-open").forEach((button) => {
  button.addEventListener("click", () => {
    cvPreviousFocus = button;
    selectCv(button.dataset.cvViewer as keyof typeof cvFiles);
    cvDialog.showModal();
    document.body.classList.add("dialog-open");
  });
});

document.querySelectorAll<HTMLButtonElement>(".cv-language").forEach((button) => {
  button.addEventListener("click", () =>
    selectCv(button.dataset.cvLang as keyof typeof cvFiles),
  );
});

document.querySelector(".cv-close")!.addEventListener("click", () =>
  cvDialog.close(),
);
cvDialog.addEventListener("click", (event) => {
  if (event.target !== cvDialog) return;
  const bounds = cvDialog.getBoundingClientRect();
  if (
    event.clientX < bounds.left ||
    event.clientX > bounds.right ||
    event.clientY < bounds.top ||
    event.clientY > bounds.bottom
  )
    cvDialog.close();
});
cvDialog.addEventListener("close", () => {
  document.body.classList.remove("dialog-open");
  cvPreviousFocus?.focus();
});

const menuToggle = document.querySelector<HTMLButtonElement>(".menu-toggle")!;
const navigation = document.querySelector<HTMLElement>("#navigation")!;
function closeMenu() {
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Ouvrir le menu");
  navigation.classList.remove("open");
}
menuToggle.addEventListener("click", () => {
  const open = menuToggle.getAttribute("aria-expanded") !== "true";
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute(
    "aria-label",
    open ? "Fermer le menu" : "Ouvrir le menu",
  );
  navigation.classList.toggle("open", open);
});
navigation
  .querySelectorAll("a")
  .forEach((link) => link.addEventListener("click", closeMenu));
document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  if (dialog.open) {
    event.preventDefault();
    dialog.close();
  }
  if (cvDialog.open) {
    event.preventDefault();
    cvDialog.close();
  }
  if (menuToggle.getAttribute("aria-expanded") === "true") {
    closeMenu();
    menuToggle.focus();
  }
});
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting)
        document
          .querySelectorAll(".nav-link")
          .forEach((link) =>
            link.classList.toggle(
              "active",
              link.getAttribute("href") === `#${entry.target.id}`,
            ),
          );
    });
  },
  { rootMargin: "-15% 0px -55% 0px" },
);
document
  .querySelectorAll("#projets, #parcours, #competences, #contact")
  .forEach((section) => observer.observe(section));
renderProjects();
