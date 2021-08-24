import React from 'react';
import { connect } from 'react-redux';
import { editSongAction } from '../actions'
class EditSong extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title:  "",
            duration: "",
            id: ""
        };
    }
    //Здесь мы можем обновить наш state в соответствии с параметрами, которые пришли к нам от родителя (props).
    static getDerivedStateFromProps(newProps,state) {
            /// в константу загоняет данные из редактируемой песни
        const {title, duration, id} = newProps.editSong;
        if(id!=state.id){
            return {
                title,
                duration,
                id
            }
        }
       return state;
    }
    render() {
        let {title,duration} = this.state;
        console.log(title)
        let {editSongAction} = this.props; /// вытаскиваем из пропсов
        
        // console.log(title)
        return(
            <form className="ui form">
                <div className="field">
                    <label>Title of edit song</label>
                    <input
                        type="text"
                        name="first-name"
                        placeholder="Title of edit song"
                        value={this.state.title}
                        onChange={(e)=>{
                            this.setState({title:e.target.value})
                        }} />
                       
                </div>
                <div className="field">
                    <label>Duration of edit song</label>
                    <input
                        type="text"
                        name="last-name"
                        placeholder="Duration of edit song"
                        value={this.state.duration}
                        onChange={(e)=>{
                            this.setState({duration:e.target.value})
                        }}/>
                </div>
                <button
                    className="ui button"
                    type="submit"
                    onClick={(e) => {
                        e.preventDefault()
                        editSongAction({
                            // предает весь текущий стейт в функцию editSiongAction
                            ...this.state
                        })
                    }}>Submit edit</button>
            </form>
        );
    }
}
const mapStateToProps = (state) => ({
    editSong: state.selectEditSong
});
  // конект подключается к редаксу
export default connect(mapStateToProps,
     {editSongAction})
     (EditSong);