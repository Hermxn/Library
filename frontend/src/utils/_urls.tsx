const urlsAPI = {
  login: "http://localhost:3000/login",
  signup: "http://localhost:3000/register",
  getBooksAll: "http://localhost:3000/books",
  getBooksOne: (id: string) => `http://localhost:3000/books/${id}`,
};

const urlsAPP = { home: "/", login: "/login/", signup: "/signup/" };

export { urlsAPI, urlsAPP };
