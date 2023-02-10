var postElement = document.getElementById('post-list')

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(posts => 
            const htmls = posts.map(post => (
                `<li>${post}</li>`
            ))
        )

