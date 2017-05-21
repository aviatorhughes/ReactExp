// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX

import * as React from 'react';
import * as ReactDOM from 'react-dom';
declare var module: any;

if (module.hot) {
    module.hot.accept();
}

interface ComponentProps {
    foo: string;
}

interface ComponentState {
    currentCount: number;
}

export class Home extends React.Component<ComponentProps, ComponentState>{
    constructor() {
        super();
        this.state = { currentCount: 0 };
    }

    public render() {
        return <div>
            <div>
                <h1> Hello, {this.props.foo}!</h1>
                <p> Current click count: <strong> {this.state.currentCount} </strong></p>
                <button onClick={() => { this.incrementCounter() }}> Increment </button>
            </div>
            <div>
                <div className="col-sm-5">
                    <table className="table table-bordered">
                        <tbody>
                            <tr>
                                <td>
                                    <image src={require('/images/cat.jpg')}  alt="cat"/>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="col-sm-offset1 col-sm-6">
                    <div >Cat </div>
                    <image src={"/images/cow.jpg"} alt="cat" />
                    
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

ReactDOM.render(
    <Home foo='shiva' />, document.getElementById('app')
);

