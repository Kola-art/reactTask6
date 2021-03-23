import React from "react";
import css from './style.module.css';

export class Valid extends React.Component{

    constructor(props) {
        super(props);
        let input = props.input;
        let area = props.area;
        this.state = {input: input, inputValid: true, area: area, areaValid: true
        };
        this.onInputChange = this.onInputChange.bind(this);
        this.onAreaChange = this.onAreaChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
              
        onAreaChange(e) {
            let val = e.target.value;
            let valid = val.length>5 ? false: true;
            this.setState({area: val, areaValid: valid});
        }
        
        onInputChange(e) {
            let val = e.target.value;
            let valid = val.length>5 ? false: true;
            this.setState({input: val, inputValid: valid});
        }
   
        handleSubmit(e) {
            e.preventDefault();
            if(this.state.inputValid === true && this.state.areaValid===true
                ){
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