const { Component } = require("react");

class Header extends Component{
    render(){
        return(<>
        <h1 className="text-warning text-center">This is an Header using Class component</h1>
        </>)
    }
}

class Slider extends Component{
    render(){
        return(<>
        <hr/>
        <h2 className="text-success text-center">This is Slider using Class component</h2>
        </>)
    }
}

class Main extends Component{
    render(){
        return(<>
        <hr/>
        <h3 className="text-danger text-center">This is Main using Class component</h3>
        </>)
    }
}

class Footer extends Component{
    render(){
        return(<>
        <hr/>
        <h4 className="text-center">This is Footer using Class Component </h4>
        </>)
    }
}

export {Header,Slider,Main,Footer}