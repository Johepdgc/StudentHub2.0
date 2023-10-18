// Función para crear una nueva publicación
function createPost(username, content) {
    const post = document.createElement('div');
    post.classList.add('post');

    // Contenido de la publicación
    const postHTML = `
        <div class="post-header">
            <h4>${username}</h4>
            <small>Hace 5 minutos</small>
        </div>
        <p>${content}</p>
        <div class="post-actions">
            <button class="btn btn-link like-button">Me gusta</button>
            <button class="btn btn-link comment-button">Comentar</button>
            <button class="btn btn-link share-button">Compartir</button>
        </div>
    `;

    post.innerHTML = postHTML;

    // Agregar publicación al contenedor de publicaciones
    const postsContainer = document.querySelector('.posts');
    postsContainer.appendChild(post);

    // Agregar eventos a los botones
    const likeButton = post.querySelector('.like-button');
    likeButton.addEventListener('click', () => {
        // Lógica para manejar el "Me gusta"
    });

    const commentButton = post.querySelector('.comment-button');
    commentButton.addEventListener('click', () => {
        // Lógica para manejar los comentarios
    });

    const shareButton = post.querySelector('.share-button');
    shareButton.addEventListener('click', () => {
        // Lógica para compartir la publicación
    });
}

// Función para manejar la publicación cuando se hace clic en el botón "Publicar"
function handlePostSubmission() {
    const postText = document.getElementById('postText').value;
    // Debes enviar esta información al servidor para guardarlo en la base de datos y obtener el nombre de usuario.
    // Por ahora, asumiremos que el nombre de usuario es "Usuario Ejemplo".
    const username = "Usuario Ejemplo";

    createPost(username, postText);

    // Limpia el cuadro de texto después de publicar
    document.getElementById('postText').value = '';
}

// Agregar un evento al botón "Publicar"
const postButton = document.getElementById('postButton');
postButton.addEventListener('click', handlePostSubmission);
