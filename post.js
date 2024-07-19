function main() {
  const id = localStorage.getItem("id");
  const title = localStorage.getItem("title");
  const body = localStorage.getItem("body");

  if (id) {
    document.getElementById("post-header").innerHTML = `Post #${id}`;
  }
  if (title) {
    document.getElementById("post-title").innerHTML = `${title}`;
  }
  if (body) {
    document.getElementById("post-body").innerHTML = `${body}`;
  }
}

main();
