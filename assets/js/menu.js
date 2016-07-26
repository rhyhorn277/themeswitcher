function navbar(){
	var nav = document.getElementById("navigation");
	nav.innerHTML = 
	"<div class='small-header'>"+
	"<div class='social-icon'>"+

	"<a href='#'><i class='fa fa-facebook' aria-hidden='true'></i></a>"+
	"<a href='#'><i class='fa fa-twitter' aria-hidden='true'></i></a>"+
	"<a href='#'><i class='fa fa-google-plus' aria-hidden='true'></i></a>"+
	"</div></div>"+
	"<div class='container'>"+
	"<!-- Brand and toggle get grouped for better mobile display -->"+
	"<div class='navbar-header'>"+
	"<button type='button' class='navbar-toggle' data-toggle='collapse' data-target='#bs-example-navbar-collapse-1'>"+
	"<span class='sr-only'>Toggle navigation</span>"+
	"<span class='icon-bar'></span>"+
	"<span class='icon-bar'></span>"+
	"<span class='icon-bar'></span>"+
	"</button>"+
	"<a class='navbar-brand' href='index.html'><i class='fa fa-shopping-bag logoicon' aria-hidden='true' style=''></i> Fashion</a>"+
	"</div>"+
	"<!-- Collect the nav links, forms, and other content for toggling -->"+
	"<div class='collapse navbar-collapse' id='bs-example-navbar-collapse-1'>"+
	"<ul class='nav navbar-nav navbar-right'>"+
	"<li><a href='about.html'>關於我們</a></li>"+
	"<li><a href='services.html'>服務</a</li>"+
	"<li class='dropdown'>"+
	"<a href='#' class='dropdown-toggle' data-toggle='dropdown'>產品 <b class='caret'></b></a>"+
	"<ul class='dropdown-menu'>"+
	"<li><a href='portfolio-1-col.html'>產品清單1</a></li>"+
	"<li><a href='portfolio-2-col.html'>產品清單2 </a></li>"+
	"<li><a href='portfolio-3-col.html'>產品清單3 </a></li>"+
	"<li><a href='portfolio-4-col.html'>產品清單4 </a></li>"+
	"<li><a href='portfolio-item.html'>產品詳情</a></li>"+
	"</ul>"+
	"</li>"+
	"<li><a href='contact.html'>聯絡我們</a></li>"+
	"</ul>"+
	"</div>"+
	"<!-- /.navbar-collapse -->"+
	"</div>"+
	"<!-- /.container -->"

	;
}
function footer(){
	var d = new Date();
	var n = d.getFullYear();
	var title = document.getElementsByTagName("TITLE");
	var footer = document.getElementsByTagName("FOOTER");
	footer[0].innerHTML = 
	"<div class='row'>"+
	"<div class='col-lg-12'>"+
	"<p>Copyright &copy; "+ title[0].innerHTML + "&nbsp;"+ n +"</p>"+
	"</div>"+
	"</div>"

	;
}

function active() {
	// body...

	var li = document.getElementsByTagName("LI");
	var links = document.getElementsByTagName("A");
	for( var i = 1; i< document.links.length; i++){
			if(links[i].href == document.URL){	
				console.log(links[i].href);
				console.log(links[i].parentNode);
				console.log();
				links[i].parentNode.className += " active";
			
			}
		};
	


}
function menu() {
	// body...
	navbar();
	footer();
	active();
}

