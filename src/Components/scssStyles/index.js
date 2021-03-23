import React from "react";
import styles from './style.module.scss';

export class Form extends React.Component{



    render(){
        return(
            <div className={styles.container}>
                    <h2> Form with scss styles</h2>  
                <form className={styles.column}>
                    <input type="text" />
                    <textarea />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}