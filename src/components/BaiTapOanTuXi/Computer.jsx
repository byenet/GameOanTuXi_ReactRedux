import React, { Component } from 'react'
import {connect} from 'react-redux';


class Computer extends Component {
    render() {

        // Date.now() de noi vao ten keyframes tranh trung lap
        let keyframe = `@keyframes randomItem${Date.now()}{
            0% {top: -50px;}
            25% {top: 100px;}
            50% {top: -50px;}
            75% {top: 100px;}
            100% {top: 0px;}
        }`

        return (
          <div className="text-center playerGame">
            <style>{keyframe}</style>
            <div className="theThink" style={{position:'relative', overflow:"hidden"}}>
              <img
                className="mt-2"
                style={{
                  position:'absolute',
                  left: '10%',
                  height: 100,
                  width: 100,
                  transform: "rotate(90deg)",
                  animation: `randomItem${Date.now()} 0.5s`,
                }}
                src={this.props.computer.hinhAnh}
                alt="keo-bua-bao"
              />
            </div>
            <div className="speech-bubble"></div>
            <img
              style={{ width: 180, height: 180 }}
              src="./img/playerComputer.png"
              alt="Thanos"
            />
          </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        computer: state.BaiTapOanTuXiReducer.computer,
    }
}

export default connect(mapStateToProps, null)(Computer);