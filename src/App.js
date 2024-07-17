import { Card } from "./Card";
import alaxaImg  from './images/alexa.png';
import cortanaImgImg  from './images/cortana.png';
import siriImg  from './images/siri.png';
import 'bulma/css/bulma.css';

function App() { 
    return (
        <div>
            <section className="hero is-primary">
                <div className="hero-body">
                    <p className="title">personal digital assistant</p>
                </div>
            </section>

            <div className="container">
                <section className="section">
                    <div className="columns is-centered">
                        <div className="column is-3">
                            <Card 
                                name="alexa" 
                                titleJob="alexa@11" 
                                image={alaxaImg} 
                                description="alexa is created by amazon" 
                            />
                        </div>
                        <div className="column is-3">
                            <Card 
                                name="cortana" 
                                titleJob="cortana@11" 
                                image={cortanaImgImg} 
                                description="cortana is created by microsoft" 
                            />
                        </div>
                        <div className="column is-3">
                            <Card 
                                name="siri" 
                                titleJob="siri@11" 
                                image={siriImg} 
                                description="siri is created by apple" 
                            />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default App;
