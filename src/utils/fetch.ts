import https from "configs/https";

export async function getDataParams(url: string, params?: any) {
  return await https.getParams(`${url}`, {
    params,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function getData(url: string) {
  return await https.get(`${url}`);
}

export async function getDataNormal(url: string) {
  return await fetch(`${url}`, {
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
}
