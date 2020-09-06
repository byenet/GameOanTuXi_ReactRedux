const stateDefault = {
    mangDatCuoc: [
        {ma:'keo', hinhAnh: './img/keo.png', datCuoc: true},
        {ma:'bua', hinhAnh: './img/bua.png', datCuoc: false},
        {ma:'bao', hinhAnh: './img/bao.png', datCuoc: false}
    ],
    ketQua: "I'm iron man, i love you 3000 !!!",
    soBanThang: 0,
    soBanChoi: 0,
    computer: {ma:'keo', hinhAnh: './img/bao.png'}
}

const BaiTapOanTuXiReducer = (state = stateDefault, action) => {
    switch (action.type) {

        case 'CHON_KEO_BUA_BAO': {
            // console.log(action);

            let mangCuocUpdate  = [...state.mangDatCuoc];

            // Tao ra mang cuoc moi tu mang cuoc cu va action.maCuoc do nguoi dung truyen len
            mangCuocUpdate = mangCuocUpdate.map((item, index) =>{
                if(item.ma === action.maCuoc){
                    return {...item,datCuoc: true};
                }
                return {...item, datCuoc: false}
            })
            // console.log('mangCuocUpdate', mangCuocUpdate);
            // console.log(action);

            // setState cua mangCuoc => render lai giao dien
            state.mangDatCuoc = mangCuocUpdate;
            return {...state};
        }

        case 'RANDOM': {
            // console.log('random: ', action);

            // random tu 0 -> 2
            let soNgauNhien = Math.floor(Math.random() * 3)

            let quanCuocNgauNghien = state.mangDatCuoc[soNgauNhien];

            state.computer = quanCuocNgauNghien;

            return {...state};
        }

        case 'END_GAME': {
            
            let player = state.mangDatCuoc.find(item => item.datCuoc === true);
            let computer = state.computer;

            switch(player.ma){
                case 'keo': 
                    if(computer.ma === 'keo'){
                        state.ketQua = 'hòa nhau !!!'
                    }else if(computer.ma === 'bua'){
                        state.ketQua = 'thua sml !!!';
                    }else{
                        state.ketQua = "I'm iron man, i love you 3000 !!!";
                        state.soBanThang += 1;
                    }; break;
                
                case 'bua': 
                    if(computer.ma === 'bua'){
                        state.ketQua = 'hòa nhau !!!'
                    }else if(computer.ma === 'bao'){
                        state.ketQua = 'thua sml !!!';
                    }else{
                        state.ketQua = "I'm iron man, i love you 3000 !!!";
                        state.soBanThang += 1;
                    }; break;
                
                case 'bao': 
                    if(computer.ma === 'bao'){
                        state.ketQua = 'hòa nhau !!!'
                    }else if(computer.ma === 'keo'){
                        state.ketQua = 'thua sml !!!';
                    }else{
                        state.ketQua = "I'm iron man, i love you 3000 !!!";
                        state.soBanThang += 1;
                    }; break;

                default: state.ketQua = "I'm iron man, i love you 3000 !!!";
                break;
            }
            state.soBanChoi += 1;
            return {...state};
        }

        default: return {...state};
    }
}

export default BaiTapOanTuXiReducer;