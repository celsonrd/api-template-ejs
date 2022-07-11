const articles = [
    {
        id: 1,
        title: 'Do anim aliqua deserunt dolore in est veniam minim.',
        description: 'Amet dolor commodo irure in labore dolore proident. Occaecat cupidatat sit ex aliqua nisi ad eiusmod. Sit laboris tempor qui irure sit aute incididunt ullamco elit magna ea amet.Incididunt nostrud eiusmod enim cillum cillum do dolore mollit elit est et ex.'
    },
    {
        id: 2,
        title: 'Nostrud laborum id aute voluptate.',	
        description: 'Quis commodo qui eiusmod culpa laboris aliquip commodo dolor mollit ullamco est est. Aliquip laboris magna ipsum amet adipisicing magna aliquip ex id laborum ullamco elit. Laboris deserunt proident dolore elit sunt reprehenderit nulla esse proident labore ad sit.'
    }
]

function getArticle(){
    return articles;
}

function getArticleById(id){
    return articles.find(article => {
        return article.id === Number(id);
    });
}

export { getArticle, getArticleById }