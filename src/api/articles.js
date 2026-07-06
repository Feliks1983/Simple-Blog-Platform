const api = "https://realworld.habsida.net/api";

export async function createArticle(token, { title, description, body }) {
  const res = await fetch(`${api}/articles`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token}`,
    },
    body: JSON.stringify({
      article: { title, description, body, tagList: [] },
    }),
  });
  const result = await res.json();
  if (!res.ok)
    throw { errors: result.errors || { root: ["Failed to create article"] } };
  return result.article;
}

export async function getArticle(slug) {
  const res = await fetch(`${api}/articles/${slug}`);
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
      Authorization: `${token}`,
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
    headers: { Authorization: `${token}` },
  });
  if (!res.ok) throw { errors: { root: ["Failed to delete article"] } };
}

export default {createArticle, getArticle, updateArticle, deleteArticle}
