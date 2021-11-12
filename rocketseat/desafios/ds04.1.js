const booksByCategory = [
    {
        category: 'Riqueza',
        books: [
            {
                tittle: 'Os Segredos da mente milionaria',
                author: 'T. Harv Eker'                
            },
            {
                tittle: 'O homem mais rico da Babilonia',
                author: 'George S. Clason'
            },
            {
                tittle: 'Pai rico, pai pobre',
                author: 'Robert T. Kiyosaki e Sharon L. Letcher'
            }

        ]
    },
    {
        category: 'Inteligencia Emocional',
        books: [
            {
                tittle: 'Você é insubstituível',
                author: 'Augusto Cury'
            },
            {
                tittle: 'Ansiedade - Como enfrentar o mal do século',
                author: 'Augusto Cury'
            },
            {
                tittle: 'Os 7 hábitos das pessoas altamente eficazes',
                author: 'Stephen R. Covey'
            }

        ]
    }
]

const totalCategories = booksByCategory.length

for(category of booksByCategory){
    console.log(`A qunatidade de livros da categoria ${category.category} é ${category.books.length}` )
    
}

function countAuthors(){
    let authors = []

    for(let category of booksByCategory){
        for(let book of category.books){
            if(authors.indexOf(book.author) == -1){
                authors.push(book.author)
            }
    
        }

     }
     console.log(`O numero de autores é ${authors.length}`)
}

function booksOfAuthor(author){
    let books = []

    for(let category of booksByCategory){
        for(let book of category.books){
            if(book.author === author){
                books.push(book.tittle)
            }
    
        }

     }
     console.log(books)
}



countAuthors()
booksOfAuthor('Augusto Cury')