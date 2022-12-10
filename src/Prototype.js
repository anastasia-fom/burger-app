import HeaderPrototype from "./components/Header/HeaderPrototype";
import BannerPrototype from "./components/Banner/BannerPrototype";
import BlogPrototype from "./components/Blog/BlogPrototype";
import NewsPrototype from "./components/News/NewsPrototype";
import './style/prototype.css'

function Prototype() {
    return(
        <>
            <HeaderPrototype />
            <main>
                <BannerPrototype />

                <section className="sections">
                    <BlogPrototype />
                    <NewsPrototype />
                </section>

            </main>
        </>
    );
}

export default Prototype;