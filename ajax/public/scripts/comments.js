const loadCommentsButton = document.getElementById('load-comments-btn');
const commentSection = document.getElementById('comments');
const commentsForm = document.querySelector('#comments-form form');
const titleOfComment = document.getElementById('title');
const textOfComment = document.getElementById('text');

function createCommentsList(comments) {
  const commentList = document.createElement('ol');

  for (const comment of comments) {
    const commentElement = document.createElement('li');
    commentElement.innerHTML = `
    <article class="comment-item">
      <h2>${comment.title}</h2>
      <p>${comment.text}</p>
    </article>
  `;
    commentList.appendChild(commentElement);
  }

  return commentList;
}

async function fetchCommentsForPost(event) {
  const postId = loadCommentsButton.dataset.postid;

  try {
    const response = await fetch(`/posts/${postId}/comments`);

    if (!response.ok) {
      alert('댓글을 불러올 수 없습니다.');
      return;
    }

    const responseData = await response.json();

    if (responseData && responseData.length > 0) {
      const commentsList = createCommentsList(responseData);
      commentSection.innerHTML = '';
      commentSection.appendChild(commentsList);
    } else {
      commentSection.firstElementChild.textContent = '댓글 없음';
    }
  } catch {
    alert('댓글을 불러올 수 없습니다.');
  }
}

async function saveComment(event) {
  event.preventDefault();
  const postId = commentsForm.dataset.postid;

  const enteredTitle = titleOfComment.value;
  const enteredText = textOfComment.value;
  const comment = { title: enteredTitle, text: enteredText };

  try {
    const response = await fetch(`/posts/${postId}/comments`, {
      method: 'POST',
      body: JSON.stringify(comment),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      fetchCommentsForPost();
    } else {
      alert('오류');
    }
  } catch (error) {
    alert('오류');
  }
}

loadCommentsButton.addEventListener('click', fetchCommentsForPost);
commentsForm.addEventListener('submit', saveComment);
