import React, { Component } from 'react'
import {connect} from 'react-redux';


class Player extends Component {
    render() {
        // console.log(this.props.mangDatCuoc);
        return (
            <div className="text-center playerGame">
                <div className="theThink">
                    <img className="mt-2" style={{height:100, width:100,transform:'rotate(90deg)'}} src={this.props.mangDatCuoc.find(item => item.datCuoc === true).hinhAnh} alt="keo-bua-bao" />
                </div>
                <div className="speech-bubble"></div>
                <img
                style={{ width: 180, height: 180 }}
                src="./img/player.png"
                alt="iron-man"
                />

                <div className="row">
                    {this.props.mangDatCuoc.map((item,index) => {

                        // xet gia tri dat cuoc them vien cho item duoc chon

                        let border = {};
                        if(item.datCuoc){
                            border = {border: "3px solid orange"}
                        }

                        return (
                            <div className="col-4" key={index}>
                                <button
                                onClick={()=> {
                                    this.props.datCuoc(item.ma);
                                }}
                                style = {border}className="btnItem">
                                <img src={item.hinhAnh} alt="keo bua bao" />
                                </button>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        mangDatCuoc: state.BaiTapOanTuXiReducer.mangDatCuoc,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        datCuoc: (maCuoc)=> {
            dispatch({
                type: 'CHON_KEO_BUA_BAO',
                maCuoc
            })
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Player)