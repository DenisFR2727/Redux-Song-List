import React from 'react'

import { connect } from 'react-redux'
// import { selectSong } from '../actions'
// ловит выбраную песню 
const SongDetail = ({ selectedSong }) => {
    // return <div>SelectedSong</div>
    if(!selectedSong){
          return null
    }
return <div>
            <span>title{selectedSong.title}</span>
            <br/>
            <span>duration{selectedSong.duration}</span>

       </div>
}
// Она принимает стейт и записывает в себя селектед сонг
const mapStateToProps = (state) =>({
    selectedSong:state.selectedSong
})

//mapStateToProps вызывает
// экспорт всего на app
export default connect(mapStateToProps)(SongDetail);