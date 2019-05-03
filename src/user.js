import React, { Component } from 'react';


class User extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                <div className='Serial'>
                    <h1> 1111  1111  1111  1111</h1>
                </div>
                <div className='validation'>
                     <div className='Numb'> <h2> 5422 </h2> </div>
                     <div className='Valid'><h3> Valid <br/> 12/50 </h3></div>
                </div>
                <div>
                   <h2 className='Nom'> ZIED CHEHIDA. </h2> 
                </div>
            </div>
            
        );
    }
}

export default User;