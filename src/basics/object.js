const loadingSkelton = {
  title: "title",
  description: "description",
  image: "url",
  tags: ["#tags"],
  btnLike() {
    console.log("🤞");
  }
};

loadingSkelton.btnLike();
let desc = loadingSkelton.description;
desc = "here is text";
console.log(desc);
loadingSkelton.title = "How to create a loading";
console.log("object");
