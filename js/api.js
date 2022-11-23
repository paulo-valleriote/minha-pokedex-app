const api = axios.create({
    baseURL: 'http://localhost:8000',
    timeout: 10000,
    headers: { 'Content-Type': 'Application/json' },
});