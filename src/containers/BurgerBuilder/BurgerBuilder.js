import React, { Component } from 'react';

import Auxiliary from '../../hoc/Auxiliary';

class BurgerBuilder extends Component {
    render() {
        return (
            <Auxiliary>
                <div>Burger img which is being built</div>
                <div>Burger build controls</div>
            </Auxiliary>
        );
    }
}

export default BurgerBuilder;