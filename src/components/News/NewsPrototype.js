import NewsElement from "./elements/NewsElement";

function NewsPrototype() {
    return(
        <section className="news">
            <div className="wrapper">
                <h2>News</h2>

                <div className="news__body">
                    <NewsElement />
                    <NewsElement />
                    <NewsElement />
                </div>
            </div>
        </section>

    );
}

export default NewsPrototype;