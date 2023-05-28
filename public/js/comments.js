// document.addEventListener("DOMContentLoaded", function () {

//   commentForm.addEventListener("submit", async (e) => {
//     e.preventDefault();

//     const response = await fetch(`/api/comment`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         postId: blogId,
//         comment: commentContent.value,
//         username: username,
//       }),
//     });

//     if (response.ok) {
//       location.reload();
//     } else {
//       alert("Failed to post comment");
//     }
//   });
// });
