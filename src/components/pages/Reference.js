import axios from 'axios';
import React from "react";
import Header from '../layouts/Header';
import Loading from '../layouts/Loading';
import Footer from "../layouts/Footer";
import Contents from "../layouts/Contents";
import WrapTitle from '../layouts/WrapTitle';
import ReferInfo from '../info/ReferInfo';
import ContInfo from '../info/ContInfo';

class Reference extends React.Component {
    state = {
        isLoading: true,
        refers: []
    }

    getRefer = async () => {
        const {
            data: {
                data : {htmlRefer},
            },
        } = await axios.get("https://webstoryboy.github.io/react5001/src/assets/json/refer.json");
        // console.log(htmlRefer);
        this.setState({refers:htmlRefer, isLoading:false});
    }
    
    componentDidMount(){
        setTimeout(()=>{
            this.getRefer();
        }, 2000);
    }

    render(){
        const {isLoading, refers} = this.state;

        return (
            <div>
                {isLoading ? (
                    <Loading />
                ) : (
                    <div>
                        <Header />
                        <Contents>
                            <section id="referCont">
                                <div className="container">
                                    <div className="wrap__title">
                                        <WrapTitle text={['REFERENCE','BOOK']} />
                                    </div>
                                    <div className="refer__cont">
                                        <div className="table">
                                            <h3>HTML</h3>
                                            <ul>
                                                {refers.map((refer)=>(
                                                    <ReferInfo 
                                                        key={refer.id}
                                                        link={refer.link}
                                                        id={refer.id}
                                                        desc1={refer.desc1}
                                                        desc2={refer.desc2}
                                                        title={refer.title}
                                                        element={refer.element}
                                                        definition={refer.definition}
                                                        tag={refer.tag}
                                                        use={refer.use}
                                                        version={refer.version}
                                                        view={refer.view}
                                                    />
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <ContInfo />
                        </Contents>
                        <Footer />
                    </div>
                )}
            </div>
        )
    }
}

export default Reference;