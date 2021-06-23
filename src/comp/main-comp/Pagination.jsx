const Pagination = (props) => {
    const pageLinks = []

    for(let i = 1; i <= props.pages; i++) {
        let active = props.currentPage == i ? 'active' : ''

        pageLinks.push(<li className={`pagination-link ${active}`} key={i} onClick={() => props.nextPage(i)}><a href="#">{i}</a></li>)
    }

    return (
        <ol className="pagination-links">
            { pageLinks }
        </ol>
    )
}

export default Pagination;