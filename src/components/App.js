/*eslint no-undef: "error"*/
/*eslint-env node*/
import React, { Component } from 'react';
import '../styles/temp.css';
import StyledApp from '../styles/StyledApp';
import Li from '../styles/Li';
import Front from '../styles/Front';
import Back from '../styles/Back';
import Button from '../styles/Button';
import { urls } from '../images';

Array.prototype.shuffle = function() {
    var input = this;

    for (var i = input.length-1; i >=0; i--) {

        var randomIndex = Math.floor(Math.random()*(i+1));
        var itemAtIndex = input[randomIndex];

        input[randomIndex] = input[i];
        input[i] = itemAtIndex;
    }
    return input;
};

class App extends Component {
    constructor(props){
        super(props);
        let object = urls.shuffle().map(url=>({[url]:false, locked: false}));
        this.state = {
            elements: [...object],
            click: 0
        };
        this.handleClick = this.handleClick.bind(this);
        this.reset = this.reset.bind(this);
    }
    handleClick(id, url){
        const { elements, click } = this.state;
        let temp=[];
        (elements[id]['locked'] === false && elements[id][url] === false) && this.setState({elements: elements.map((el,i)=>i===id ? {...el,[url]:true} : el), click:click+1},()=>{
            this.state.elements.map(el=>{
                if(el['locked']===false && Object.values(el)[0]===true){
                    temp.push(Object.keys(el)[0]);
                }

            });
            if(this.state.click===2){
                if(temp[0]!==temp[1]){
                    setTimeout(()=>this.setState({
                        elements: this.state.elements.map((el)=>{
                            if(el[temp[0]]) return {...el, [temp[0]]:false};
                            if(el[temp[1]]) return {...el, [temp[1]]:false};
                            return el;
                        }),
                        click:0
                    }),500);
                }else{
                    setTimeout(()=>this.setState({
                        click:0,
                        elements: this.state.elements.map((el)=>(el[temp[0]] || el[temp[1]]) ? {...el, locked:true} : el)
                    }),500);
                }
            }
        });
    }
    reset(){
        let object = urls.shuffle().map(url=>({[url]:false, locked: false}));
        this.setState({
            elements: [...object],
            click: 0
        });
    }
    render() {
        const { elements } = this.state;
        return (
            <React.Fragment>
                <StyledApp>
                    <h2>Memory Game</h2>
                    <ul>
                        {elements
                            .map(el=>Object.keys(el)[0])
                            .map((url,i)=>
                                <Li key={i} onClick={()=>this.handleClick(i,url)}>
                                    {!elements[i][url] ?
                                        <Front>
                                        </Front> :
                                        <Back>
                                            <img src={require(`../images/${url}`)} />
                                        </Back>}
                                </Li>
                            )}
                    </ul>
                    {!(elements.map(el=>el['locked']===false).includes(true)) && <Button onClick={this.reset}>Reset</Button>}
                </StyledApp>
            </React.Fragment>
        );
    }
}

export default App;
