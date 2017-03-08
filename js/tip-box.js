var layer = document.createElement("div");
layer.id = "tip-box";
var style = {
	position: "fixed",
	zIndex: 1000,
	padding: "1rem 1.5rem",
	borderRadius: "5px",
	color: "#fff",
	bottom: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	webkitTransform: "translate(-50%, -50%)"

}
for(var i in style) {
	layer.style[i] = style[i];
}
var timeoutflag = null;
function tipBox(tiptext) {
		var tipBox=document.getElementById("tip-box");
		if(tipBox != null) {
			document.body.removeChild(tipBox);
			clearTimeout(timeoutflag);
		}
		timeoutflag = setTimeout(function() {
			layer.innerHTML = tiptext;
			document.body.appendChild(layer);
			
		}, 300);
};