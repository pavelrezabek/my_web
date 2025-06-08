type ArticleMeta = {
  id: string;
  title: string;
  intro: string;
  category: string;
};

const container = document.getElementById("article-container");

function renderArticles(articles: ArticleMeta[]) {
  if (!container) return;
  container.innerHTML = '';
  articles.forEach(article => {
    const section = document.createElement('section');
    section.className = 'post';
    section.innerHTML = `
      <h2>${article.title}</h2>
      <p>${article.intro}</p>
      <a href="articles/${article.id}.html">Číst celý článek</a>
    `;
    container.appendChild(section);
  });
}

async function loadArticles(filter: string) {
  const res = await fetch('/articles.json');
  const all: ArticleMeta[] = await res.json();
  const filtered = filter === "all" ? all : all.filter(a => a.category === filter);
  renderArticles(filtered);
}

document.querySelectorAll("nav a").forEach(el => {
  el.addEventListener("click", e => {
    const target = e.currentTarget as HTMLElement;
    const filter = target.dataset.filter;

    if (filter) {
      e.preventDefault();               // Zabráníme jen filtrovacím odkazům
      loadArticles(filter);
    }
    // jinak necháme odkaz fungovat přirozeně (např. /about)
  });
});

loadArticles("all");
