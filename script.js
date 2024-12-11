document.getElementById('commentForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const comment = document.getElementById('comment').value;

    const commentBlock = document.createElement('div');
    commentBlock.classList.add('comment');

    const nameElement = document.createElement('h3');
    nameElement.textContent = name;

    const commentElement = document.createElement('p');
    commentElement.textContent = comment;

    const timestamp = document.createElement('small');
    timestamp.textContent = new Date().toLocaleString();

    commentBlock.appendChild(nameElement);
    commentBlock.appendChild(commentElement);
    commentBlock.appendChild(timestamp);

    document.getElementById('commentsList').appendChild(commentBlock);

    document.getElementById('commentForm').reset();
});
