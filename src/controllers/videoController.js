const fakeUser = {
  username: "Nicolas",
  loggedIn: false,
};


export const trending = (req, res) => res.render("home", {pageTitle: "Home", fakeUser});
export const watch = (req, res) => res.render("watch");
export const see = (req, res) => {
  return res.send(`Watch Video #${req.params.id}`);
};
export const edit = (req, res) => {
  return res.send(`#${req.params.id} Edit`);
};
export const search = (req, res) => res.send("Video search");
export const upload = (req, res) => res.send("uploading");
export const remove = (req, res) => {
  return res.send("Delete Video");
};
