 var Icon = React.createClass({
          render: function() {
          var classString = 'glyphicon glyphicon-';
              if (this.props.class) {
                classString += this.props.class + ' display-icon';
              }
          var classHTMLcopy = "<span class='"+ classString + "'></span>"; 
          var classUnicodeEntity = "\u0026" + "\u0023" + "x" + this.props.unicode + ";";
          var classCssRule = "content:\"\\" + this.props.unicode + "\";";
        
            return (
              <div className="icon col-lg-1 col-md-2 col-sm-3 col-xs-4">
                <span className={classString} dangerouslySetInnerHTML={{__html: classUnicodeEntity }}></span>
                <p className="icon-name"><code>{this.props.class}</code></p>
                <div className="btn-group">
                <button type="button" className="btn btn-default dropdown-toggle btn-xs" data-toggle="dropdown" aria-expanded="false">
                Copy <span className="caret"></span>
                </button>
                <ul className="dropdown-menu" role="menu">
                <li><a className="copy-button copy-html" href="#" data-clipboard-text={classHTMLcopy}><span className="glyphicon glyphicon-copy"></span> HTML Tag</a></li>
                <li><a className="copy-button copy-unicode" href="#" data-clipboard-text={classUnicodeEntity}><span className="glyphicon glyphicon-screenshot"></span> HTML Entity</a></li>
                <li><a className="copy-button copy-css" href="#" data-clipboard-text={classCssRule}><span className="glyphicon glyphicon-globe"></span> CSS Rule</a></li>
                </ul>
                </div>
                <hr />
              </div>
            );
          }
        });  
      
       var IconList = React.createClass({
          render: function() {         
            var iconNodes = this.props.data.map(function (icon) {    
              return (
                <Icon class={icon.id} unicode={icon.unicode}>
                  {icon.id}
                </Icon>
              );
            });
            return (
              <div className="iconList">
                {iconNodes}
              </div>
            );
          }
        });

        var NavBarCheat = React.createClass({
          render: function() {         
            return (
              <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
               <div className="container nav-contain">
                <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"> <span className="sr-only">Toggle navigation</span> <span className="icon-bar"></span> <span className="icon-bar"></span> <span className="icon-bar"></span> </button>
                <a className="navbar-brand" href="http://bootstrapcheatsheets.com"><img src="images/logo-white-h58@2x.png" alt="Bootstrap Cheat Sheets logo" width="144" height="58" /></a>
                </div>
                <div className="collapse navbar-collapse">
                <ul className="nav navbar-nav pull-right">
                    <li className="nav-search">
                        <div className="input-group">
                        <input id="glyph-search" type="text" className="form-control" placeholder="Search" />
                        <span className="input-group-btn">
                          <button className="btn btn-default" type="button" id="filter-clear">X</button>
                        </span>
                        </div>
                    </li>
                    <li className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="1000" data-close-others="false">Digital <b className="caret"></b></a>
                    <ul className="dropdown-menu">
                    <li><a href="#home" id="scroll-to-home">Glyphicons</a></li>
                    <li><a href="http://fontawesome.bootstrapcheatsheets.com">Font Awesome</a></li>
                    </ul>
                    </li>
                    <li><a href="#about" id="scroll-to-about">About</a></li>
                    <li><a href="http://bootstrapcheatsheets.com/shop">Shop</a></li>
                </ul>
                </div>
                </div>
              </nav>
            );
          }
        }); 

        var AboutCheatsheet = React.createClass({
            render: function() {
             return (
                 <div className="about" id="about">
                                     <div className="container">
                        <div className="col-md-8">
                            <h1>How to Use Bootstrap 3 Glyphicons</h1>
            <p>Glyphicons are great! They're one of my favourite additions to native Bootstrap 3. I've been working with these glyphs quite a lot, so I thought I'd make a cheat sheet for myself.</p>
            <h2>Cheat sheet?</h2>
            <p>Yeah! To use this cheat sheet, simply find the glyphicon you want to use and click the copy button. This will add the complete HTML code for that glyphicon (span tag and all) to your clipboard, ready to paste into your web development tool of choice.</p>
            <h2>What are Glyphicons?</h2>
            <p>Glyphicons are basically little symbols, icons, or pictograms (whatever you prefer to call them) that you can use in a webpage. They're implemented in Bootstrap as an icon font — a custom font that contains these glyphs instead of letters.</p>
            <p>If you're creating a site based on Bootstrap 3.3.2, you already have access to all 260 glyphs in the Glyphicons 1.9 set.</p>
            <p>Don't know how to set up Bootstrap? Go check out the offical <a href="http://getbootstrap.com/getting-started/" target="_blank">getting started guide</a>, or simply just include these two lines in your <code>&lt;head&gt;</code> tag:</p>
                        </div>
                        <div className="col-md-4">
                            <h1>About me</h1>
                            <p><a href="http://twitter.com/jamescroft"><img src="images/james.jpg" alt="James Croft" className="img-circle" width="140" height="140" /></a></p>
                            <p>My name is <a href="http://twitter.com/jamescroft">James Croft</a>. I'm a web developer from Brisbane, Australia.</p>
                            <p>If you found this page useful, consider buying <a href="http://bootstrapcheatsheets.com/shop" className="muted">a Bootstrap Cheat Sheet poster</a> for your wall!</p>
                        </div>
                    </div>
                 </div>
          );
          }
        }); 


             
        var Cheatsheet = React.createClass({        
            loadCommentsFromServer: function() {
                $.ajax({
                      url: this.props.url,
                      dataType: 'json',
                      success: function(data) {
                        this.setState({data: data});
                      }.bind(this),
                      error: function(xhr, status, err) {
                        console.error(this.props.url, status, err.toString());
                      }.bind(this)
                    });
                  },
              componentDidMount: function() {
                this.loadCommentsFromServer();
                setInterval(this.loadCommentsFromServer, this.props.pollInterval);
              },

              getInitialState: function() {
                return {data: []};
              },
              render: function() {
                return (
                  
                  <div className="col-md-12">
                  <NavBarCheat />
                    <div className="ad-break-top"></div>
                    <h1 className="cheatsheet-title">Bootstrap Glyphicons <span className="cheatsheet-version"> v3.2.2</span></h1>
                    
                    <IconList data={this.state.data} />   
                    <AboutCheatsheet />
                  </div>
                );
              }
            });

        React.render(
          <Cheatsheet url="icons-1-9-0.json" pollInterval={2000} />,
          document.getElementById('content')
);