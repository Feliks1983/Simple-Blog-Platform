const api = "https://realworld.habsida.net/api";

export async function createArticle(
  token,
  { title, description, body, tagList = [] },
) {
  const res = await fetch(`${api}/articles`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
    },
    body: JSON.stringify({ article: { title, description, body, tagList } }),
  });
  const result = await res.json();
  if (!res.ok)
    throw { errors: result.errors || { root: ["Failed to create article"] } };
  return result.article;
}

export async function getArticle(slug, token) {
  const res = await fetch(`${api}/articles/${slug}`, {
    headers: token ? { Authorization: `Token ${token}` } : {},
  });
  const result = await res.json();
  if (!res.ok)
    throw { errors: result.errors || { root: ["Failed to load article"] } };
  return result.article;
}

export async function updateArticle(token, slug, { title, description, body }) {
  const res = await fetch(`${api}/articles/${slug}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
    },
    body: JSON.stringify({ article: { title, description, body } }),
  });
  const result = await res.json();
  if (!res.ok)
    throw { errors: result.errors || { root: ["Failed to update article"] } };
  return result.article;
}

export async function deleteArticle(token, slug) {
  const res = await fetch(`${api}/articles/${slug}`, {
    method: "DELETE",
    headers: { Authorization: `Token ${token}` },
  });
  if (!res.ok) throw { errors: { root: ["Failed to delete article"] } };
}

export async function favoriteArticle(token, slug) {
  const res = await fetch(`${api}/articles/${slug}/favorite`, {
    method: "POST",
    headers: { Authorization: `Token ${token}` },
  });
  const result = await res.json();
  if (!res.ok)
    throw { errors: result.errors || { root: ["Failed to like article"] } };
  return result.article;
}
