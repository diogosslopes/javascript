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
let soma = 0
let livroAnterior = ''
let livroAtual = ''
let numAutores = 0

console.log(`O numero de categorias é ${booksByCategory.length}`)

for(i=0;i<booksByCategory.length;i++)
    {
       console.log(`A categoria ${booksByCategory[i].category} tem ${booksByCategory[i].books.length} livros, que são eles:`)
        
        for(x=0;x<booksByCategory[0].books.length || x<booksByCategory[1].books.length;x++)
            {
                livroAnterior = livroAtual
                livroAtual = booksByCategory[i].books[x].author
                if(booksByCategory[i].books[x].author.includes('Augusto Cury')){
                    soma = soma + 1
                }
                console.log( `${booksByCategory[i].books[x].tittle} do autor ${booksByCategory[i].books[x].author}`)
                if(livroAnterior != livroAtual){
                    numAutores = numAutores + 1
                }
                
            }
            
    }
    console.log(`Em nossa lista temos ${numAutores} livros de autores diferentes e ${soma} são do autor Augusto Cury`)

