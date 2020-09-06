import React, { Component } from 'react'
import './BaiTapOanTuXi.css'
import Player from './Player'
import Computer from './Computer'
import KetQuaTroChoi from './KetQuaTroChoi'
import {connect} from 'react-redux';



class BaiTapOanTuXi extends Component {

    render() {

        return (
            <div className="gameOanTuXi">
                
                <div className="row text-center mt-4">
                    <div className="col-4">
                        <Player/>
                    </div>
                    <div className="col-4">
                        <KetQuaTroChoi/>
                        <button className="btn btn-success" onClick={()=> {this.props.playerGame()}}>Play game</button>
                    </div>
                    <div className="col-4">
                        <Computer/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        playerGame: ()=> {

            let count = 0;
            // khai bao ham lap di lap lai (de random nhieu lan gia tri)
            let randomComputer = setInterval(() => {
                    dispatch({
                        type: "RANDOM",
                    });
                    count++;
                    if(count > 10){
                        // Dung ham setInterval
                        clearInterval(randomComputer);

                        dispatch({
                            type: "END_GAME"
                        })
                    }
            },200)
        }
    }
}

export default connect(null, mapDispatchToProps)(BaiTapOanTuXi)
