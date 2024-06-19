import ArticleCard from "./ArticleCard";

export default function Articles({page, meta}){

    return (
        <> 
            <div>
                {
                    meta.data.map(article => <ArticleCard meta={article}/> )
                }
            </div>
            <div>
                {
                    page.url.next && <a href={page.url.next}>next</a>
                }
                {
                    page.url.prev && <a href={page.url.prev}>prev</a>
                }
            </div>
        </>
    )
}