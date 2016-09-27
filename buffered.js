(function() {

    var vid = document.getElementById("mydiveo");
    var ptext = document.getElementById("text");
    var btn_dj = document.getElementById("btn");

    btn_dj.onclick = function() {
        ptext.innerHTML = "开始" + ":" + vid.buffered.start(0) + "结束" + ":" + vid.buffered.end(0);
         console.log(vid.buffered.length);
         
    }


}(window))
