import React from "react";

export class UsersCreator extends React.Component{
    render(){
        return(
            <div id="users-creator">
                <form>
                    <p>
                    <input onChange={this.props.handleUserOnChange} value={this.props.user.first_name} name="first_name" type="text" placeholder="First name"/>
                    </p>
                    <p>
                    <input onChange={this.props.handleUserOnChange} value={this.props.user.last_name} name="last_name" type="text" placeholder="last name"/>
                    </p>
                    <p>
                    <input onChange={this.props.handleUserOnChange}  value={this.props.user.email} name="email" type="text" placeholder="e-mail"/>
                    </p>
                    <p>
                    <input onChange={this.props.handleUserOnChange}  value={this.props.user.role} name="role" type="text" placeholder="Role"/>
                    </p>
                    <p>
                    <input onChange={this.props.handleUserOnChange}  value={this.props.user.country} name="country" type="text" placeholder="Country"/>
                    </p>
                    <p>
                    <input  onChange={this.props.handleUserOnChange} value={this.props.user.city} name="city" type="text" placeholder="City"/>
                    </p>
                    <p>
                    <input onChange={this.props.handleUserOnChange} value={this.props.user.muncipality} name="muncipality" type="text" placeholder="Muncipality"/>
                    </p>
                    <p>
                    <input type="submit" value="Add User"/>
                    </p>
                </form>    
            </div>
        )
    }
}