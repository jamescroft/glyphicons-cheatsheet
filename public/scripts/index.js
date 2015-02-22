 var Icon = React.createClass({
          render: function() {
          var classString = 'glyphicon ';
              if (this.props.class) {
                classString += this.props.class;
              }
          var classHTMLcopy = "<span class='"+ classString + "'></span>"; 
          var classUnicodeEntity = "&#x" + this.props.class;
        
            return (
              <div className="icon text-center col-xs-12">
                <span className={classString}></span>
                <p><code>.{this.props.class}</code></p>
                <div className="btn-group">
                <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                Copy <span className="caret"></span>
                </button>
                <ul className="dropdown-menu" role="menu">
                <li><a className="copy-button" href="#" data-clipboard-text={classHTMLcopy}>HTML Tag</a></li>
                <li><a className="copy-button" href="#" data-clipboard-text={classUnicodeEntity}>HTML Entity</a></li>
                <li><a href="#">CSS Rule</a></li>
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
                <Icon class={icon.id}>
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
                    <h1 className="text-center">Glyphicons Cheatsheet</h1>
                    <IconList data={this.state.data} />     
                  </div>
                );
              }
            });

        React.render(
          <Cheatsheet url="icons-1-9-0.json" pollInterval={2000} />,
          document.getElementById('content')
);