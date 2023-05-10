export const textToSpeak =(text)=>{
    const msg = new SpeechSynthesisUtterance();
    const voices = window.speechSynthesis.getVoices();
    msg.voice = voices[4];
    msg.volume = 1;
    msg.rate = 1.5;
    msg.pitch = 1;
    msg.text = text;
    msg.lang = 'ja-JP';

    speechSynthesis.speak(msg);
};

export const cancelSpeak = ()=>{
    speechSynthesis.cancel();
}

