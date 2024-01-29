import '../assets/css/page404.css'
import { Link } from "react-router-dom";

const Page404 = () => {

    return (
        <main>
            <section className="page-centered">
                    <p className="description">page not found</p>
                    <Link to="/" className="link">Go to home</Link>
            </section>
        </main>
    );
}

export default Page404;