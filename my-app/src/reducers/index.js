// Создаем редюсер
import {combineReducers} from "redux";
import { v4 } from 'uuid'
const SONGS = [
    {title: 'No Scrubs', duration: '4:05', id:v4()},
    {title: 'Macarena', duration: '2:30', id: v4()},
    {title: 'All Star', duration: '3:15', id: v4()},
    {title: 'I Want it That Way', duration: '1:45', id: v4()},
];
//первый редюсер (стейт и экшен принимает)
const songsReducers = (songs = SONGS,action)=>{
    //ловит случай SONG_ADDED если он наступил то он возвращает список песен и выбраную песню. 
       if(action.type === 'SONG_ADDED'){
           console.log('9999')
           return [...songs ,action.payload]
           
       }
       else if(action.type === 'SONG_DELETED'){
             // ищем в общем масиве сонгов песню с названием которая не равна названию прилитевшему
             console.log(action.payload)
             console.log(songs)
             console.log('7777')
           return songs.filter((song)=>song.id !== action.payload);
       }
       else if(action.type === 'SONG_EDIT'){
           console.log('SONG_EDIT')
             // перебиораем масив песен 
            return songs.map( (song)=> {
                 // если id перебираемой песни = id прилитевшему 
                if(song.id === action.payload.id){
                    return {
                        // ретернем текущию песню
                        ...action.payload
                    };
                }
                // возращаем песню которую перебираем(Если не наступит IF)
                return song;
            })
       }
       // Если проверка не наступила то возвращаем все песни
       return songs
};
// второй редюсер (стейт и экшен)
   // Это редюсер который реагирует на выбор песни
const selectedSongReducer = (selectedSong = null ,action) =>{
    // в случаи SONG_SELECTED возвращаем выбраную песню
    if(action.type === 'SONG_SELECTED'){
        return action.payload; // в єкшен возращает song из пейлоад
    }
    // если иф не сработал то возвращает null
    return selectedSong;
};

                                // прилитает сигнал с action.js 
const selectEditSongReducer = (selectedEditSong ={ title:'', duration:''},action) =>{
    console.log('122433')
   if(action.type === 'EDIT_SONG_SELECTED'){
       // ретернит текущую песню
        return action.payload
   }
     // редактирование конкретной песни
   return selectedEditSong
}
// експорт редюсерс на индекс 
export default combineReducers({
    // закинули два редюсера
    // назва стейтам 
    // первое поле 
    
    songs: songsReducers,
    selectedSong:selectedSongReducer,
    selectEditSong:selectEditSongReducer,
    // selectedEditSong:selectedEditSong
})