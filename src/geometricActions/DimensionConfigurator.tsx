import React from 'react';

interface IProps {
    dimension: number,
    length: number,
    onChange: (event: any) => void
}

export default class DimensionConfigurator extends React.Component<IProps>{
    
    render () {
        return (
            <>
                <h1>I'm a {this.props.dimension === 0 ? ' width' : 'height' } configurator</h1>
                <div ></div>
                <input 
                name="length" 
                style={{width: this.props.length + "px"} as React.CSSProperties} 
                onChange={this.props.onChange} 
                type="number" 
                value={this.props.length} />
            </>
        );
    }
}; 