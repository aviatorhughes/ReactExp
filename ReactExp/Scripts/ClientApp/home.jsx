// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
import * as React from 'react';
import * as ReactDOM from 'react-dom';
if (module.hot) {
    module.hot.accept();
}
export class Home extends React.Component {
    constructor() {
        super();
        this.state = { currentCount: 0 };
    }
    render() {
        return <div>
            <div>
                <h1> Hello, {this.props.foo}!</h1>
                <p> Current click count: <strong> {this.state.currentCount} </strong></p>
                <button onClick={() => { this.incrementCounter(); }}> Increment </button>
            </div>
            <div>
                <div className="col-sm-5">
                    <table className="table table-bordered">
                        <tbody>
                            <tr>
                                <td>
                                    <image src={"/images/cat.jpg"} alt="cat"/>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="col-sm-7">
                </div>
            </div>
        </div>;
    }
    incrementCounter() {
        this.setState({
            currentCount: this.state.currentCount + 1
        });
    }
}
ReactDOM.render(<Home foo='shiva'/>, document.getElementById('app'));
//# sourceMappingURL=home.jsx.map