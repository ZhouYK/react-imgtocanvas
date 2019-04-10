/**
 * Created by zhouyunkui on 2017/6/26.
 */
import React from 'react';
import ReactDom from 'react-dom';
import ImgToCanvas from '../src';
class Index extends React.Component {
  constructor( options ) {
    super( options );
    this.state = {};
  }
  onChange = ( evt ) => {
    const file = evt.target.files[0];
    if ( file ) {
      this.setState({
        file,
      });
    }
  }
  render() {
    const style = {
      width: 250,
      height: 250,
    }
    const { file } = this.state;
    return <div style={{textAlign: 'center'}}>
      <div className="code-source">
        <a href="https://github.com/ZhouYK/iron/blob/master/assets/js/components/ImgUpload/index.js" target="blank">示例代码</a>
      </div>
      <input type="file" onChange={this.onChange}/>
      <ImgToCanvas
        file={file}
        width={400}
        height={400}
        style={style}
      />
    </div>;
  }
}

ReactDom.render(<Index />, document.getElementById('bd'));
