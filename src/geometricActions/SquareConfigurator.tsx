import React from 'react';
import DimensionConfigurator from './DimensionConfigurator';

export enum dimension {
    height,
    width
};

interface IState {
    height: number,
    width: number
};

export default class SquareConfigurator extends React.Component<{}, IState> {
    state =
    {
        height: 100,
        width: 200
    }

    Dimensions: dimension = dimension.height

    

    render () {
        return (
        <>
            <hr />
            <h1>Hello I'm a square configurator</h1>
            <DimensionConfigurator dimension={dimension.width} length={this.state.height} 
            onChange={(event)=>{this.setState({
                height: event.target.value
            })}}
            />
            <DimensionConfigurator dimension={dimension.height} length={this.state.width} 
            onChange={(event)=>{this.setState({
                width: event.target.value
            })}}
            />
            <br />
            <div style={{width: this.state.width + "px", height: this.state.height + 'px',marginTop: '20px',background: 'red', border: '1px solid black'} as React.CSSProperties}></div>
        </>
        );
    }
}
