import React from "react";
import axios from "axios";

import {UsersCreator} from "./UserCreator";
import {UsersTable} from "./UsersTable";


export class App extends React.Component{
    
    
    constructor(props){
        super(props);
        
        this.state={
            user:{
                first_name:"",
                last_name:"",
                email:"",
                role:"",
                country:"",
                city:"",
                municipality:""
            },
            users:[]
        }

        this.handleUserOnChange=this.handleUserOnChange.bind(this);
        this.fetchUsers=this.fetchUsers.bind(this);
    }
    componentDidMount(){
        this.fetchUsers();
    }
    
    handleUserOnChange(e){
        this.setState({
            user:{
                ...this.state.user,
                [e.target.name]:e.target.value
            }
        })
        .catch((err)=>{
            console.log("error fetching users",err);
        });
    }
    fetchUsers(){
        axios.get("localhost/users")
        .then((res)=>{
            this.setState({
                users:res.data
            })
        })
    }
    
    render(){
        return(
            <div id="app-container">
            <UsersCreator user={this.state.user}
            handleUserOnChange={this.handleUserOnChange}
            />
            <UsersTable/>
            </div>
        )
    }
}