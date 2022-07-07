const fakeUser = {
  username: "jk",
  loggedIn: true,
};
const videos = [
  {
    title: "First Video",
    rating: 5,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 59,
    id: 1,
  },
  {
    title: "Second Video",
    rating: 5,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 59,
    id: 1,
  },
  {
    title: "Third Video",
    rating: 5,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 59,
    id: 1,
  },
];
export const trending = (req, res) => {
  return res.render("home", { pageTitle: "Home", videos });
};
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

export const getUpload = (req, res) =>
  res.render("upload", { pageTitle: "Upload" });
export const postUpload = (req, res) => {
  const a = req.body;
  const newVideo = {
    halo: a,
    rating: 0,
    comments: 0,
  };
  videos.push(newVideo);
  return res.redirect("/");
};
