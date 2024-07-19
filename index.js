function generateCard(id, title, body) {
  const cardContainer = document.getElementById("cards-container");
  const cardHTML = `<div class="card text-center mb-3 my-card mx-auto w-25 " style="width: 18rem " id = "card-${id}">
          <div class="card-body">
            <h5 class="card-title" style="font-weight: bold; font-size: 1.25rem;">${title}</h5>
            <p class="card-text  style="font-size: 1rem;">${body}</p>
          </div>
        </div>`;

  cardContainer.insertAdjacentHTML("beforeend", cardHTML);
}

function addCardsEventListener(id, title, body) {
  const card_id = `card-${id}`;
  document.getElementById(card_id).addEventListener("click", (ev) => {
    localStorage.setItem("title", title);
    localStorage.setItem("id", id);
    localStorage.setItem("body", body);
    window.location.href = "/post.html";
  });
}

async function main() {
  localStorage.clear();
  const url = "https://jsonplaceholder.typicode.com/posts";
  const posts = await fetch(url).then((res) => res.json());
  for (i in posts) {
    generateCard(posts[i].id, posts[i].title, posts[i].body);
    addCardsEventListener(posts[i].id, posts[i].title, posts[i].body);
  }
}

main();
