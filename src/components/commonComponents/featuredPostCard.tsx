// IMPORT //


type featuredPostCardProps = {
    image: string
    alt: string
    badge: string
    source: string
    category: string
    status: string
    title: React.ReactNode
    description: React.ReactNode
    date: string
    comments: number
    learnMoreLink: string
}

function featuredPostCard({
    image,
    alt,
    badge,
    source,
    category,
    status,
    title,
    description,
    date,
    comments,
    learnMoreLink,
}: featuredPostCardProps) {
    return (
        <article id='featuredCard'>

            <div id='image-wrapper'>
                <img src={image} alt={alt} />
                <span id='new-badge'>{badge}</span>
            </div>

            <div id='source-wrapper'>
                <span id='google'>{source}</span>
                <span id='trending'>{category}</span>
                <span id='new'>{status}</span>
            </div>

            <h3>{title}</h3>

            <p>{description}</p>

            <div id='comments-wrapper'>
                <span id='time'>
                    <i className="bi bi-alarm"></i> {date}
                </span>
                <span id='comment'>
                    <i className="fa-solid fa-chart-area"></i> {comments} comments
                </span>
            </div>

            <a href={learnMoreLink} id='learn-more'>
                Learn More <i className="bi bi-chevron-right"></i>
            </a>

        </article>
    )
}

export default featuredPostCard