import * as Speech from 'expo-speech';

async function playAudio(request, response){
    
    Speech.speak(request.texto, {language: 'pt-BR'});
   
    response.json({
        result: 'ok'
    });
}

export default playAudio;