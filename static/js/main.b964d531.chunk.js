(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{11:function(e,a,t){e.exports=t(19)},16:function(e,a,t){},19:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(10),s=t.n(r),c=(t(16),t(1)),i=t(2),o=t(4),m=t(3),u=t(8),d=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,a=this.props.data.occupation,t=this.props.data.address.city,n=this.props.data.social.map((function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url,target:"_black"},l.a.createElement("i",{className:e.className})))}));return l.a.createElement("header",{id:"home"},l.a.createElement("nav",{id:"nav-wrap"},l.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),l.a.createElement("a",{className:"mobile-btn",href:"#home",title:"Hide navigation"},"Hide navigation"),l.a.createElement("ul",{id:"nav",className:"nav"},l.a.createElement("li",{className:"current"},l.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Resume")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Projects")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#testimonials"},"Testimonials")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Contact")))),l.a.createElement("div",{className:"row banner"},l.a.createElement("div",{className:"banner-text"},l.a.createElement("h1",{className:"responsive-headline"},"I'm ",e,"."),l.a.createElement("h2",null,"I'm a ",a," based in ",t,"."),l.a.createElement("hr",null),l.a.createElement("ul",{className:"social"},n))))}}]),t}(n.Component),p=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.social.map((function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url,target:"_black"},l.a.createElement("i",{className:e.className})))}));return l.a.createElement("footer",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("ul",{className:"social-links"},e),l.a.createElement("ul",{className:"copyright"},l.a.createElement("li",null,"\xa9 Copyright 2020 Cameron Jude Luyt"))),l.a.createElement("div",{id:"go-top"},l.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},l.a.createElement("i",{className:"fas fa-arrow-up"})))))}}]),t}(n.Component),h=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,a="images/"+this.props.data.image,t=this.props.data.bio,n=this.props.data.address.street,r=this.props.data.address.province,s=this.props.data.address.zip,c=this.props.data.phone,i=this.props.data.email;return l.a.createElement("section",{id:"about"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("h2",null,"About"),l.a.createElement("p",null,t),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"columns contact-details"},l.a.createElement("h2",null,"Contact Details"),l.a.createElement("p",{className:"address"},e,l.a.createElement("br",null),n,l.a.createElement("br",null),r,l.a.createElement("br",null),s,l.a.createElement("br",null),c,l.a.createElement("br",null),i)),l.a.createElement("div",{className:"columns download"}))),l.a.createElement("div",{className:"three columns"},l.a.createElement("img",{className:"profile-pic",src:a,alt:"Cameron Jude Luyt Profile Pic"}),l.a.createElement("p",null,l.a.createElement("a",{href:"CURRICULUM_VITAE_OF_CAMERON_LUYT.docx",className:"button"},l.a.createElement("i",{className:"fa fa-download"})," Download CV")),l.a.createElement("div",null,l.a.createElement("h2",null,"Hobbies"),l.a.createElement("div",{className:"hobbies"},l.a.createElement("div",null,l.a.createElement("i",{className:"fas fa-gamepad"})," Gaming"),l.a.createElement("div",null,l.a.createElement("i",{className:"fas fa-camera"})," Photography"),l.a.createElement("div",null,l.a.createElement("i",{className:"fas fa-headphones"})," Music"),l.a.createElement("div",null,l.a.createElement("i",{className:"fas fa-guitar"})," Playing guitar"))))))}}]),t}(n.Component),E=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.education.map((function(e){return l.a.createElement("div",{key:e.school},l.a.createElement("h3",null,e.school),l.a.createElement("p",{className:"info"},e.degree," ",l.a.createElement("span",null,"\u2022"),l.a.createElement("em",{className:"date"},e.graduated)),l.a.createElement("p",null,e.description))})),a=this.props.data.work.map((function(e){return l.a.createElement("div",{key:e.company},l.a.createElement("h3",null,e.company),l.a.createElement("p",{className:"info"},e.title,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.years," years")),l.a.createElement("p",null,e.description))})),t=this.props.data.skills.map((function(e){var a="bar-expand "+e.name.toLowerCase();return l.a.createElement("li",{key:e.name},l.a.createElement("span",{style:{width:e.level},className:a}),l.a.createElement("em",null,e.name))}));return l.a.createElement("section",{id:"resume"},l.a.createElement("div",{className:"row education"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Education"))),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},e)))),l.a.createElement("div",{className:"row work"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Work"))),l.a.createElement("div",{className:"nine columns main-col"},a)),l.a.createElement("div",{className:"row skill"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Skills"))),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("div",{className:"bars"},l.a.createElement("ul",{className:"skills"},t)))))}}]),t}(n.Component),f=t(6),v=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).submitForm=n.submitForm.bind(Object(f.a)(n)),n.state={status:""},n}return Object(i.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,a=this.props.data.address.street,t=this.props.data.address.province,n=this.props.data.address.zip,r=this.props.data.phone,s=this.props.data.email;return l.a.createElement("section",{id:"contact"},l.a.createElement("div",{className:"row section-head"},l.a.createElement("div",{className:"two columns"},l.a.createElement("h6",null," ")),l.a.createElement("div",{className:"ten columns"},l.a.createElement("h1",null,"Get In Touch."))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"eight columns"},l.a.createElement("form",{onSubmit:this.submitForm,action:"https://formspree.io/mrgyyaqo",method:"POST"},l.a.createElement("fieldset",null,l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"contactName"},"Name ",l.a.createElement("span",{className:"required"},"*")),l.a.createElement("input",{type:"text",defaultValue:"",size:"35",id:"contactName",name:"contactName",onChange:this.handleChange})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"contactEmail"},"Email ",l.a.createElement("span",{className:"required"},"*")),l.a.createElement("input",{type:"text",defaultValue:"",size:"35",id:"contactEmail",name:"contactEmail",onChange:this.handleChange})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"contactSubject"},"Subject"),l.a.createElement("input",{type:"text",defaultValue:"",size:"35",id:"contactSubject",name:"contactSubject",onChange:this.handleChange})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"contactMessage"},"Message ",l.a.createElement("span",{className:"required"},"*")),l.a.createElement("textarea",{cols:"50",rows:"5",id:"contactMessage",name:"contactMessage"})),l.a.createElement("div",null,l.a.createElement("button",{className:"submit"},"Submit"),l.a.createElement("span",{id:"image-loader"},l.a.createElement("img",{alt:"",src:"images/loader.gif"}))))),l.a.createElement("div",{id:"message-warning"},"Error"),l.a.createElement("div",{id:"message-success"},l.a.createElement("i",{className:"fa fa-check"}),"Message sent, thank you!",l.a.createElement("br",null))),l.a.createElement("aside",{className:"four columns footer-widgets"},l.a.createElement("div",{className:"widget widget_contact"},l.a.createElement("h4",null,"Address and Contact Details"),l.a.createElement("p",{className:"address"},e,l.a.createElement("br",null),a," ",l.a.createElement("br",null),t,l.a.createElement("br",null),n,l.a.createElement("br",null),r,l.a.createElement("br",null),s)))))}},{key:"submitForm",value:function(e){var a=this;e.preventDefault();var t=e.target,n=new FormData(t),l=new XMLHttpRequest;l.open(t.method,t.action),l.setRequestHeader("Accept","application/json"),l.onreadystatechange=function(){l.readyState===XMLHttpRequest.DONE&&(200===l.status?(t.reset(),a.setState({status:"SUCCESS"})):a.setState({status:"ERROR"}))},l.send(n)}}]),t}(n.Component),b=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.testimonials.map((function(e){return l.a.createElement("li",{key:e.user},l.a.createElement("blockquote",null,l.a.createElement("p",null,e.text),l.a.createElement("cite",null,e.user)))}));return l.a.createElement("section",{id:"testimonials"},l.a.createElement("div",{className:"text-container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"two columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Client Testimonials"))),l.a.createElement("div",{className:"nine columns flex-container"},l.a.createElement("ul",{className:"slides"},e)))))}}]),t}(n.Component),g=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.projects.map((function(e){var a="images/portfolio/"+e.image;return l.a.createElement("div",{key:e.title,className:"columns portfolio-item"},l.a.createElement("div",{className:"item-wrap"},l.a.createElement("img",{alt:e.title,src:a}),l.a.createElement("div",{className:"overlay"},l.a.createElement("div",{className:"portfolio-item-meta"},l.a.createElement("h3",null,e.title),l.a.createElement("p",null,e.category),l.a.createElement("div",{className:"meta-buttons"},l.a.createElement("a",{href:e.url,title:e.title,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("button",{name:"code",className:"view-code-btn"},"View Code")),e.demo&&l.a.createElement("a",{href:e.demo,title:e.title,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("button",{name:"demo",className:"view-demo-btn"},"View Demo")))))))}));return l.a.createElement("section",{id:"portfolio"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns collapsed"},l.a.createElement("h1",null,"Check Out My Projects"),l.a.createElement("div",{id:"portfolio-wrapper",className:"cf"},e))))}}]),t}(n.Component),N=t(7),y=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).state={resumeData:{}},u.a.initialize("UA-110570651-1"),u.a.pageview(window.location.pathname),n}return Object(i.a)(t,[{key:"getResumeData",value:function(){var e=this;fetch(N).then((function(e){return JSON.parse(JSON.stringify(N))})).then((function(a){e.setState({resumeData:a})}))}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(d,{data:this.state.resumeData.main}),l.a.createElement(h,{data:this.state.resumeData.main}),l.a.createElement(E,{data:this.state.resumeData.resume}),l.a.createElement(g,{data:this.state.resumeData.portfolio}),l.a.createElement(b,{data:this.state.resumeData.testimonials}),l.a.createElement(v,{data:this.state.resumeData.main}),l.a.createElement(p,{data:this.state.resumeData.main}))}}]),t}(n.Component);s.a.render(l.a.createElement(y,null),document.getElementById("root"))},7:function(e){e.exports=JSON.parse('{"main":{"name":"Cameron Jude Luyt","occupation":"Jnr Front-End Developer","image":"me.jpg","bio":"I am a hard working individual with the capacity to accomplish any task through my creative problem-solving abilities. I have a lifelong passion for technology and am always eager and motivated to broaden my knowledge. I aim to be a productive and efficient team member with the ability to lead as well. My main goal is to become a full-stack developer.","email":"cameronluyt30@gmail.com","phone":"081-019-0744","address":{"street":"Mitchell\'s Plain","city":"Cape Town","province":"Western Cape","zip":"7785"},"social":[{"name":"github","url":"https://github.com/CameronLuyt69","className":"fa fa-github"},{"name":"linkedin","url":"https://www.linkedin.com/in/cameron-luyt-138b441a9/","className":"fa fa-linkedin"},{"name":"twitter","url":"https://twitter.com/CameronLuyt69","className":"fa fa-twitter"}]},"resume":{"education":[{"school":"Life Choices Academy","degree":"Web Development","graduated":"2020","description":"A bootcamp which simulates a work experience. During my time here I learned the following coding languages HTML, CSS, JavaScript, ReactJS, Python and MongoDB. I was also exposed to personal and professional development."},{"school":"Mondale High School","degree":"National Senior Certificate","graduated":"2019","description":"There are three words that describes Mondale High and its students. Discipline, Dedication and Determination."}],"work":[{"company":"Hanover Park Cricket Club","title":"Score-Keeper","years":"2","description":"Kept track of the score, did match reports after each game and organised drinks after each game."},{"company":"Yorkshire Cricket Club","title":"Score-Keeper","years":"1","description":"Kept track of the score"}],"skills":[{"name":"HTML5","level":"90%"},{"name":"CSS","level":"90%"},{"name":"React + Redux","level":"75%"},{"name":"JavaScript","level":"70%"},{"name":"Python","level":"50%"},{"name":"Git","level":"75%"},{"name":"MongoDB","level":"60%"}]},"portfolio":{"projects":[{"title":"User Profile System","category":"A site that stores user information in the form of card panels and models. Users are removable. This project was built with HTML, CSS and Bootstrap.","image":"4 WORK.png","url":"https://github.com/CameronLuyt69/Assignments/tree/master/WebDesignEndOfModuleProject"},{"title":"GitHub Finder","category":"A site that fetches GitHub user information. The site displays information such as user profile picture, followers and following, number of repos and gists, a link to the users profile and more. This project was built using HTML, CSS, React and more","image":"1 WORK.png","url":"https://github.com/CameronLuyt69/GitHub-Finder"},{"title":"Contact-Keeper","category":"A site that allows users to create personal/proessional accounts. With these accounts users are able to store and manage contacts. This project was built with HTML, CSS, React, MongoDB and more","image":"3 WORK.png","url":"https://github.com/CameronLuyt69/Contact-Keeper"},{"title":"Contact-Keeper","image":"3WORK.png","url":"https://github.com/CameronLuyt69/Contact-Keeper"},{"title":"AZ-TECH","category":"A site that enables users to shop online for items tech related. This site includes features such as a user login system, inventory management, order management, shopping cart system, reviews and more. This project was built using HTML, CSS, React, MongoDB and more","image":"6 WORK.png","url":"https://github.com/CameronLuyt69/AZ-TECH","demo":"https://az-tech.herokuapp.com/"},{"title":"Cameron Jude Luyt","category":"A site the displays my professional information. Thhis site also includes examples of past projects aswell as a downloadable CV. This project was built with HTML, CSS, React and more","image":"5 WORK.png","url":"https://github.com/CameronLuyt69/My-Portfolio","demo":"https://github.com/CameronLuyt69/My-Portfolio"}]},"testimonials":{"testimonials":[{"text":"Cameron is a fantastic developer to work with. In addition to his pleasant personality, Cameron is co-operative and willing to learn.","user":"Godwin Dzvapatsva(Head of Curriculum and Learning)"},{"text":"He produces excellent work, and has a great work ethic, and also a team player","user":"Tyron Keet"},{"text":"Cameron\'s a creative thinker and determined individual. He has great potential and will be an asset to any workplace ","user":"Viata Fredricks"}]}}')}},[[11,1,2]]]);
//# sourceMappingURL=main.b964d531.chunk.js.map