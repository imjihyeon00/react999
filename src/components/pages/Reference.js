import axios from 'axios';
import React from "react";
import Header from '../layouts/Header';
import Loading from '../layouts/Loading';
import Footer from "../layouts/Footer";
import Contents from "../layouts/Contents";
import WrapTitle from '../layouts/WrapTitle';
import ReferInfo from '../info/ReferInfo';
import ReferCssInfo from '../info/ReferCssInfo';
import ReferJsInfo from '../info/ReferJsInfo';
import ContInfo from '../info/ContInfo';

class Reference extends React.Component {
    state = {
        isLoading: true,
        menu: 0,
        refers: [],
        cssRefers:[],
        jsRefers:[]
    }

    getRefer = async () => {
        const {
            data: {
                data : {htmlRefer},
            },
        } = await axios.get("https://imjihyeon00.github.io/react999/src/assets/json/refer.json");
        const {
            data: {
                data : {cssRefer},
            },
        } = await axios.get("https://imjihyeon00.github.io/react999/src/assets/json/refer_css.json");
        const {
            data: {
                data : {jsRefer},
            },
        } = await axios.get("https://imjihyeon00.github.io/react999/src/assets/json/refer_js.json");
        // console.log(htmlRefer);
        this.setState({refers:htmlRefer, cssRefers:cssRefer, jsRefers:jsRefer, isLoading:false});
    }

    changeMenu = (menuIndex) =>{
        this.setState({menu : menuIndex});
    }
    
    componentDidMount(){
        setTimeout(()=>{
            this.getRefer();
        }, 2000);
    }

    render(){
        const {isLoading, refers, cssRefers, jsRefers} = this.state;

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
                                            <h3 className={`${this.state.menu === 0? 'active': ''}`} onClick={() => this.changeMenu(0)}>HTML</h3>
                                            <h3 className={`${this.state.menu === 1? 'active': ''}`} onClick={() => this.changeMenu(1)}>CSS</h3>
                                            <h3 className={`${this.state.menu === 2? 'active': ''}`} onClick={() => this.changeMenu(2)}>JAVASCRIPT</h3>
                                            <ul className={`${this.state.menu === 0? 'show': ''}`}>
                                                {refers.map((refer)=>(
                                                    <ReferInfo 
                                                        key={refer.title}
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
                                            <ul className={`${this.state.menu === 1? 'show': ''}`}>
                                                {cssRefers.map((refer)=>(
                                                    <ReferCssInfo 
                                                        key={refer.title}
                                                        link={refer.link}
                                                        id={refer.id}
                                                        title={refer.title}
                                                        desc1={refer.desc1}
                                                        desc2={refer.desc2}
                                                        default1={refer.default1}
                                                        apply={refer.apply}
                                                        version={refer.version}
                                                        use={refer.use}
                                                        definition={refer.definition}
                                                    />
                                                ))}
                                            </ul>
                                            <ul className={`${this.state.menu === 2? 'show': ''}`}>
                                                {jsRefers.map((refer)=>(
                                                    <ReferJsInfo 
                                                        key={refer.title}
                                                        id={refer.id}
                                                        link={refer.link}
                                                        title={refer.title}
                                                        desc1={refer.desc1}
                                                        desc2={refer.desc2}
                                                        parameters={refer.parameters}
                                                        return1={refer.return1}
                                                        definition={refer.definition}
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