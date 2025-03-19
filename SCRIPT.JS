const movieContainer = document.querySelector('.movie-container');


// Adiciona os filmes na lista
movies.forEach(movie => {
    const movieElement = document.createElement('img');
    movieElement.src = `path_to_images/${movie}`;
    movieElement.alt = 'Filme';
    movieElement.classList.add('movie');
    movieContainer.appendChild(movieElement);
});
