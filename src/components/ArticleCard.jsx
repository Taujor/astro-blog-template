export default function ArticleCard({meta}){
    
    return (
        <>
            <div className="m-4 p-4">
                <p className="text-sm mb-1">{meta.data.birthtime.toLocaleDateString("en-GB", {day: "numeric", month: "numeric", year: "numeric"})}</p>
                <h1 className="text-lg">{meta.data.title}</h1>
                <p>{meta.data.description}</p>
            </div>
        </>
    )
}