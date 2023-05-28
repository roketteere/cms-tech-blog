const form = document.querySelector("#blogPostForm");
const blogId = document.querySelector("#blogId"); // If 'blogId' is an id attribute, use 'getElementById("blogId")' instead
const editBtn = document.querySelector("#editBtn");
const title = document.querySelector("#blogTitle");
const content = document.querySelector("#blogContent");
const commentForm = document.querySelector("#commentForm");
const commentContent = document.querySelector("#commentContent");
const username = document.querySelector("#username");
const commBtn = document.querySelector("#post-comment");

commentForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const response = await fetch(`/api/comment/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: blogId.value,
      comment: commentContent.value,
      username: username.value,
    }),
  });
  if (response.ok) {
    const data = await response.json();
    console.log(data);
    window.location.href = "/";
  } else {
    alert("Failed to post comment");
  }
});

editBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  const response = await fetch(`/api/blog/edit`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: blogId.value,
      title: title.value,
      content: content.value,
    }),
  });
  if (response.ok) {
    const data = await response.json();
    console.log(data);
    window.location.href = "/";
  } else {
    console.error("Error:", response.statusText);
  }
});

title.addEventListener("focus", (e) => {
  title.readOnly = false;
  title.style.background = "#ff9990";
  editBtn.disabled = false;
});

content.addEventListener("focus", (e) => {
  content.readOnly = false;
  content.style.background = "#ff9990";
  editBtn.disabled = false;
});
