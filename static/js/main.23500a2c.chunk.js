(this.webpackJsonpmarksblog=this.webpackJsonpmarksblog||[]).push([[0],[,,,function(e,t,a){e.exports=a.p+"static/media/Mark.9d93d549.jpg"},,,,,function(e,t,a){e.exports=a(21)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(2),r=a.n(l),c=a(3),s=a.n(c),o=(a(13),function(){return i.a.createElement("div",{className:"header-container"},i.a.createElement("img",{className:"ui raised header-image",src:s.a,alt:"On Holiday in San Fransisco"}),i.a.createElement("div",{className:"header-text"},i.a.createElement("h1",null,"Mark Lawrence"),i.a.createElement("p",null,"Technical Consultant at ",i.a.createElement("a",{href:"https://www.wearetaplondon.com/",style:{textDecoration:"underline"}},"TAP London"),", with a background in Mathematics and Computer Science."),i.a.createElement("a",{href:"https://github.com/marklawrence97",style:{color:"black"}},i.a.createElement("i",{className:"big github icon"})),i.a.createElement("a",{href:"https://www.linkedin.com/in/mark-lawrence-8b5a99123/"},i.a.createElement("i",{className:"big linkedin icon"}))))}),m=(a(14),function(){return i.a.createElement("div",{className:"nav"},i.a.createElement("div",{className:"ui divider top"}),i.a.createElement("a",{href:""},"Profile"),i.a.createElement("a",{href:""},"Posts"),i.a.createElement("a",{href:""},"Projects"),i.a.createElement("a",{href:""},"Resume"),i.a.createElement("div",{className:"ui divider bottom"}))}),d=(a(15),function(){return i.a.createElement("div",{className:"ui bio"},i.a.createElement("h2",null,"Profile"),i.a.createElement("p",null,"Passionate about utilising web technologies to create memorable online experiences. My goal is to make life easier and more enjoyable for people through automation and thoughtfully designed solutions. I'm a big believer in employing digital technologies to help others bring their ideas to life. Always learning, and always ready to take on a new project."),i.a.createElement("div",{className:"ui divider bio-end"}))}),u=a(4),p=a(5),h=a(7),E=a(6),f=function(e){var t=e.image,a=e.header,n=e.description,l=e.date;return i.a.createElement("div",{className:"ui fluid link card",style:{minHeight:"100%"}},i.a.createElement("div",{className:"image"},i.a.createElement("img",{src:t})),i.a.createElement("div",{className:"content"},i.a.createElement("div",{className:"header"},a),i.a.createElement("div",{className:"meta"},i.a.createElement("a",null,l)),i.a.createElement("div",{className:"description"},n)))},v=(a(16),function(e){Object(h.a)(a,e);var t=Object(E.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(e=t.call.apply(t,[this].concat(i))).state={topClass:"active item",allPostsClass:"item"},e.handleTopClick=function(){"active item"!==e.state.topClass&&e.setState({topClass:"active item",allPostsClass:"item"})},e.handleAllClick=function(){"active item"!==e.state.allPostsClass&&e.setState({topClass:"item",allPostsClass:"active item"})},e}return Object(p.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"posts"},i.a.createElement("h2",null,this.props.title),i.a.createElement("div",{className:"ui top attached tabular menu"},i.a.createElement("a",{className:this.state.topClass,onClick:this.handleTopClick},"Top"),i.a.createElement("a",{className:this.state.allPostsClass,onClick:this.handleAllClick},"All ",this.props.title.charAt(0).toUpperCase()+this.props.title.substring(1))),i.a.createElement("div",{className:"ui bottom attached segment"},i.a.createElement("div",{className:"ui stackable three column grid cards"},this.props.posts.map((function(e){return i.a.createElement("div",{className:"column",key:e.id},i.a.createElement(f,{header:e.header,image:e.image,description:e.description,date:e.date}))})))),i.a.createElement("div",{className:"ui divider bio-end"}))}}]),a}(i.a.Component)),g=(a(17),function(e){var t=e.position,a=e.title,n=e.role,l=e.date;return i.a.createElement("div",{className:"container ".concat(t)},i.a.createElement("div",{className:"ui raised card"},i.a.createElement("div",{className:"content"},i.a.createElement("p",null,n," at"),i.a.createElement("h3",null,a),i.a.createElement("p",{className:"date"},l))))}),b=(a(18),function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("h2",{style:{marginLeft:"20%"}},"Resume"),i.a.createElement("div",{className:"timeline-fade"}),i.a.createElement("div",{className:"timeline"},i.a.createElement(g,{position:"right",title:"University of Bath",role:"Computer Science MSc",date:"May 2020 - Current"}),i.a.createElement(g,{position:"left",title:"TAP London",role:"Technical Consultant",date:"Oct 2019 - Current"}),i.a.createElement(g,{position:"right",title:"University of Leeds",role:"Mathematics BSc",date:"Sep 2015 - June 2019"})),i.a.createElement("div",{className:"timeline-bottom"}))}),N=(a(19),function(){return i.a.createElement("div",{className:"footer"},i.a.createElement("div",{className:"ui divider"}),i.a.createElement("div",{className:"footer-content",style:{display:"flex",justifyContent:"space-between"}},i.a.createElement("p",null,"Mark Lawrence"),i.a.createElement("p",{className:"email"},"mark_lawrence97@icloud.com"),i.a.createElement("div",null,i.a.createElement("a",{href:"https://github.com/marklawrence97",style:{color:"black"}},i.a.createElement("i",{className:"github icon"})),i.a.createElement("a",{href:"https://www.linkedin.com/in/mark-lawrence-8b5a99123/"},i.a.createElement("i",{className:"linkedin icon"})))))}),k=[{id:1,header:"Evolutionary Game Theory",date:(new Date).toLocaleDateString(),description:"We will be looking at the Prisoner's Dilemma",image:"https://images.unsplash.com/photo-1513159446162-54eb8bdaa79b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"},{id:2,header:"My time in America",date:(new Date).toLocaleDateString(),description:"I spent 3 years working as a lifeguard at a summer camp",image:"https://images.unsplash.com/photo-1522083165195-3424ed129620?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1160&q=80"}],w=[{id:3,header:"cs50 Books",date:(new Date).toLocaleDateString(),description:"My solution to cs50's project 1.",image:"https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"}];var y=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(o,null),i.a.createElement(m,null),i.a.createElement(d,null),i.a.createElement(v,{title:"Posts",posts:k}),i.a.createElement(v,{title:"Projects",posts:w}),i.a.createElement(b,null),i.a.createElement(N,null))};a(20);r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(y,null)),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.23500a2c.chunk.js.map