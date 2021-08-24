import React from "react";
// функция с самого редакса конект Импортируем 
import {connect} from 'react-redux'
// импортируем селект сонг из экшена
import {selectSong,addSong,deleteSong, selectEditSong} from '../actions'
import EditSong from './EditSong'
import { v4 } from 'uuid'

class SongsList extends React.Component{
       constructor(props){
            super(props);
            this.state = {
                 title:'',
                 duration:''
            }

       }
    //создали метод renderList
     renderList(){
         // создается обьект в которы прилитает переменная и функция и в них записываем пропсы
            // в константу сонгс залетает список песен из редакса (берутся они из пропса)
            // в константу селектеСонгс залетает функция из файла actions - selectSong
         const { songs, selectSong, deleteSong, selectEditSong} = this.props
         console.log(this.props)
        //  selectSong({}); //store.dispatch(selectedSong({}))
        /// 
         return songs.map((song)=>{
             return (
                <div key={song.title} className='item'>
                    <div className='right floated content'>   {/*Вызываем функцию при Онклике из файла экшенс selectSong*/}
                        <button className="ui button primary" onClick={()=>selectSong(song)}>Select</button>
                        <button className="ui button primary negative" onClick={()=>deleteSong(song.id)}>Delete</button>
                        <button className="ui button" onClick={()=>selectEditSong(song)}>Edit</button>
                       
                    </div>
                    <div  className='left floated content'>{song.title}</div>
                </div>

             )
         });
     }
      render(){
              //addSong из экшенов
          const {addSong} = this.props;
          console.log(addSong)
          // из стейта записываем в title duratuion
          const {title, duration} = this.state;
          // список всех песен
      return<div>
          {/*Форма скопирована с https://semantic-ui.com/*/}
                  {/*e.preventDefault() - что б страница не перезагружалась */}
            <form onClick={(e)=>{e.preventDefault()}} className="ui form">
                <div className="field">
                    <label>Title</label>
                    <input 
                        type="text" 
                        value={title} 
                        name="first-name" 
                        placeholder="Title"
                        onChange={(e)=>{
                            this.setState({title:e.target.value})
                        }} 
                    />
                </div>
                <div className="field">
                    <label>Duration</label>
                    <input type="text" 
                           value={duration} 
                           name="last-name" 
                           placeholder="Duration"
                           onChange={(e)=>{
                            this.setState({duration:e.target.value})
                        }}  
                    />
                </div>
                <button disabled={!title.length || !duration.length}
                        className="ui button" 
                        type="submit" 
                    onClick={()=>{
                        // addSongs из экшенов
                        // addSongs -вызывает редюсер который добавляет в редакс - хранилище новую песню. 
                      addSong({
                        id: v4(),
                        title:title,
                        duration:duration
                         });
                          // с помощью setState обнуляем поля в инпутах при добавлении песни
                         this.setState({title:'',duration:''
                        });

                      }}>
                    
                    Add song   
                </button>
            </form>
            <br/>
            <br/>
            <br/>
               <EditSong />
               <br/>
               <br/>
               <br/>
               <div className="ui divided list">
                   {this.renderList()}
               </div>
           </div>
      
    
      }
}
// обьект пропсов
const mapStateToProps = (state) =>({
     // присваеваем проперти songs - state
     //songs ключ передаем в const { songs, selectSong } = this.props
       songs:state.songs
})
// в первы скобки два аршгумента 
// во вторые скобки передаем наш клас SongList
// connect - знает все про стейт
// connect (2 аргумента map State mapDicpatch)(назва компонента);
export default connect(mapStateToProps,{
    selectEditSong,
    selectSong,// value -
    addSong,
    deleteSong
})(SongsList)