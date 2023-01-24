import Header from "../../components/Header/Header";
import {useEffect, useState} from "react";
import {getContacts, getOrders} from "../../utils/api/API";
import Loader from "../../components/Banner/elements/Loader";

const Contacts = () => {
    const [contacts, setContacts] = useState({});
    const [loading, setLoading] = useState(false);
    const [location, setLocation] = useState();

    useEffect(() => {
        const loadContacts = async () => {
            setLoading(true);
            try {
                const {
                    data: [loadedContacts]
                } = await getContacts();
                setContacts(loadedContacts);
                setLoading(false);
            } catch (error) {
                console.error(error);
            }
        }
        loadContacts();
    }, []);

    return (
        <>
            <Header/>
            <main className="contacts">
                {loading ? (
                    <Loader />
                ) : (
                    <div className="contacts__content">
                        <div className="contacts__contacts">
                            <h2>Contacts</h2>
                            <p><span>Phone</span> {contacts.phone}</p>
                            <p><span>Email</span> {contacts.email}</p>
                            <p><span>Worktime</span> {contacts.worktime}</p>
                        </div>
                        <div className="contacts__address">
                            <h2>Address</h2>
                            {
                                contacts.locations !== undefined ?
                                    <div>
                                        <p><span>Ivano-Frankivsk:</span> {contacts.locations.if}</p>
                                        <p><span>Lviv:</span> {contacts.locations.lviv}</p>
                                        <p><span>Kyiv:</span> {contacts.locations.kyiv}</p>
                                    </div>
                                    : <p>Sorry, something went wrong!</p>
                            }
                        </div>

                        <div className="contacts__links">
                            <h2>Links</h2>
                            <div className="contacts__links-items">
                                <a href={contacts.fb}><img src={require("../../assets/icons/facebook.png")} alt="Social"/></a>
                                <a href={contacts.inst}><img src={require("../../assets/icons/instagram.png")} alt="Social"/></a>
                                <a href={contacts.web}><img src={require("../../assets/icons/internet.png")} alt="Social"/></a>
                            </div>
                        </div>
                    </div>
                )}
            </main>
        </>
    )
}

export default Contacts;