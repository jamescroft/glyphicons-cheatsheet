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
                <li><a className="copy-button" href="#" data-clipboard-text={classHTMLcopy}><span className="glyphicon glyphicon-copy"></span> HTML Tag</a></li>
                <li><a className="copy-button" href="#" data-clipboard-text={classUnicodeEntity}><span className="glyphicon glyphicon-screenshot"></span> HTML Entity</a></li>
                <li><a className="copy-button" href="#" data-clipboard-text={classCssRule}><span className="glyphicon glyphicon-globe"></span> CSS Rule</a></li>
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
                    <h1 className="text-center">Bootstrap Glyphicons v3.2.2</h1>
                    <IconList data={this.state.data} />     
                  </div>
                );
              }
            });

        React.render(
          <Cheatsheet url="icons-1-9-0.json" pollInterval={2000} />,
          document.getElementById('content')
);