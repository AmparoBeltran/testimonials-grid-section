import { CardsStyled } from "./styles/Cards.styled";
import { data } from "../data";

export default function Cards() {
    return (
        <CardsStyled>


            {data.map((item, index) => (
                <div key={index} className="container">
                    <div className="author-container">
                        <img src={item.avatar} alt="avatar" />
                        <div className="author">
                            <span className="name">{item.author}</span>
                            <span className="status">{item.status}</span>
                        </div>
                    </div>
                    <div className="review">
                        <p className="short">{item.short}</p>
                        <p className="description">{item.description}</p>
                    </div>
                </div>
            ))}


        </CardsStyled>
    )
}