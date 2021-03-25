import React from "react";
import css from './style.module.css';

export class Valid extends React.Component{

    constructor(props) {
        super(props);
        this.state = {input: '', inputValid: true, area: '', areaValid: true
        };
        this.onInputChange = this.onInputChange.bind(this);
        this.onAreaChange = this.onAreaChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
              
        onAreaChange(e) {
            this.setState({area: e.target.value});
            let valid = this.state.area.length>4 ? false: true;
            this.setState({areaValid: valid});
        }
        
        onInputChange(e) {
           this.setState({input: e.target.value});
            let valid = this.state.input.length>4 ? false: true;
            this.setState({inputValid: valid});
        }
   
        handleSubmit(e) {
            e.preventDefault();
            if(this.state.inputValid && this.state.areaValid){
                console.log('submit success');
            }
            else console.log("Something is wrong, check inputs");
        }
   
    render(){
        let inputColor = this.state.inputValid===true ? "green" :"red";
        let areaColor = this.state.areaValid===true ? "green" :"red";
        return(
            <div className={css.container}>
                    <h2>Form with css styles</h2>  
                <form className={css.column} onSubmit={this.handleSubmit}>
                    <label>Less then 5 symbols</label>
                    <input type="text" value={this.state.input} onChange={this.onInputChange} style={{borderColor:inputColor}} />
                    <label>Less then 5 symbols</label>
                    <textarea value={this.state.area} onChange={this.onAreaChange} style={{borderColor:areaColor}}/>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}