// ++++++++++ Activity 1 +++++++++++

const book = {
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    Published: 1997
}

console.log(book);
console.log(`Title of the book is '${book['title']}' and the author is '${book['author']}'` + '\n');


// ++++++++++ Activity 2 +++++++++++

book.details = function(){
    return `Title of the book is '${book['title']}' and the author is '${book['author']}'`
}

console.log(book.details());

book.newYear = function(year){
    return book.Published = year;
}

book.newYear(1666)
console.log(book.Published + '\n');


// ++++++++++ Activity 3 +++++++++++

const book1 = {
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    Published: 1997,
    library: {
        name: "olumpus",
        books: [
            {title: 'hindibook',year: 1992},
            {title: 'Englishbook', year: 1996},
            {title: 'Sanskritbook', year: 2000}
        ]
    }
}
console.log(book1.library +'\n');

console.log(`Name of library is: ${book1.library.name}`);

const ans = book1.library.books.map((books) => {
    return books.title + " ";
})
console.log(ans +'\n');


// ++++++++++ Activity 4 +++++++++++

book1.getDetails = function(){
    return this.library.books.map(book => {
        return `Title of the book is '${book.title}' and the year is '${book.year}'`;
    }).join('\n');
}
console.log(book1.getDetails() + '\n');


// ++++++++++ Activity 4 +++++++++++

function logDetails(obj) {
    for (const key in obj) {
        if( typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key]) ){
            console.log(`${key}:`);
            logDetails(obj[key])
        }
        else if(Array.isArray(obj[key])){
            console.log(`${key}: [`);
            obj[key].forEach(item => {
                if( typeof item === 'object' && item !== null )
                    logDetails(item);
                else
                    console.log(`  ${item}`);
            });
            console.log(']');
        }else{
            console.log(`${key}: ${obj[key]}`);
        }
    }
}
logDetails(book1)