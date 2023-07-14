import { Header } from '../../shared/components/layout/Header/Header';


export const ThxPage = () => {
    return (
        <div>
            <Header /> 
            <section id="welcome">
                <div className="welcome-container">
                    <div className="welcome-content">
                        <h3>thank you Berndt <span style={{color: '#00EECC'}}>!</span>{' '}</h3>
                            <p>
                                Your trust and partnership have been instrumental in our 
                                success. As a token of our appreciation, we have prepared 
                                a special gift for you — an exclusive video crafted with 
                                you in mind. This is a digital token that accompanies 
                                physical canvas you&apos;ve already have.
                            </p>
                    </div>
                </div>
            </section>

            <section id="geonodes">
                {/* <img src={nftGraphic} /> */}
            </section>
        </div>
    )
}