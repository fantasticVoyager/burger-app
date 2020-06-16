import React, {Component} from 'react';
import Layout from './components/Layout/Layout';

class App extends Component {
  render() {
    return (
      <div>
        <p>it still works</p>
        <Layout>
          <p>stuff in a paragraph</p>
          <div>stuff in a div</div>
        </Layout>
      </div>
    );
  }
}

export default App;
