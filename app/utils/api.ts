export function api<T>(url: string): Promise<T> {
  return fetch(url, { cache: "no-cache" })
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      return response.json() as Promise<T>
    })
}