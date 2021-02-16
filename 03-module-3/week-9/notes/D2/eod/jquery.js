const form = document.getElementById(`form`);

form.addEventListener(`submit`, (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const data = formData.get(`comment[body]`);

  $.ajax({
    method: `post`,
    url: `${form.getAttribute(`id`)}/comment`,
    data: {comment: {body: data}},
    success(comment) {
      addComment(comment);
    },
    error(error) {
      handleError(error);
    },
  });
});