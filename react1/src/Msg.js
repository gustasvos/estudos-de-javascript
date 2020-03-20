import React from 'react';

export default class Msg extends React.Component {
    render(){
        return <div>Parabens {this.props.nome} pelos {this.props.idade} anos!</div>;
    }
}
