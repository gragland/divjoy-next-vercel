function submit(data) {
  return fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then(r => r.json());
}

export default { submit };
