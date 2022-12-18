import bacon from "./../../../assets/img/Bacon.png";
import cheese from "./../../../assets/img/Cheese.png";
import salad from "./../../../assets/img/Salad.png";
import pickle from "./../../../assets/img/Pickle.png";
import meat from "./../../../assets/img/Meat.png";
import tomato from "./../../../assets/img/Tomato.png";
import ketchup from "./../../../assets/img/Ketchup.png";
import mustard from "./../../../assets/img/Mustard.png";

const Count = () => {
    return (
        <div className="stuffing-block">
            <h2>Stuffing</h2>

            <div className="stuffing-block__elements">
                <div className="stuffing-block__element">
                    <div className="stuffing-block__buttons">
                        <button className="btn-minus">-</button>
                        <p>0</p>
                        <button className="btn-plus">+</button>
                    </div>
                    <img src={bacon} alt="Bacon" />
                </div>

                <div className="stuffing-block__element">
                    <div className="stuffing-block__buttons">
                        <button className="btn-minus">-</button>
                        <p>0</p>
                        <button className="btn-plus">+</button>
                    </div>
                    <img src={cheese} alt="Bacon" />
                </div>

                <div className="stuffing-block__element">
                    <div className="stuffing-block__buttons">
                        <button className="btn-minus">-</button>
                        <p>0</p>
                        <button className="btn-plus">+</button>
                    </div>
                    <img src={salad} alt="Bacon" />
                </div>

                <div className="stuffing-block__element">
                    <div className="stuffing-block__buttons">
                        <button className="btn-minus">-</button>
                        <p>0</p>
                        <button className="btn-plus">+</button>
                    </div>
                    <img src={pickle} alt="Bacon" />
                </div>

                <div className="stuffing-block__element">
                    <div className="stuffing-block__buttons">
                        <button className="btn-minus">-</button>
                        <p>0</p>
                        <button className="btn-plus">+</button>
                    </div>
                    <img src={meat} alt="Bacon" />
                </div>

                <div className="stuffing-block__element">
                    <div className="stuffing-block__buttons">
                        <button className="btn-minus">-</button>
                        <p>0</p>
                        <button className="btn-plus">+</button>
                    </div>
                    <img src={tomato} alt="Bacon" />
                </div>

                <div className="stuffing-block__element">
                    <div className="stuffing-block__buttons">
                        <button className="btn-minus">-</button>
                        <p>0</p>
                        <button className="btn-plus">+</button>
                    </div>
                    <img src={ketchup} alt="Bacon" />
                </div>

                <div className="stuffing-block__element">
                    <div className="stuffing-block__buttons">
                        <button className="btn-minus">-</button>
                        <p>0</p>
                        <button className="btn-plus">+</button>
                    </div>
                    <img src={mustard} alt="Bacon" />
                </div>

            </div>
        </div>
    )
}

export default Count;