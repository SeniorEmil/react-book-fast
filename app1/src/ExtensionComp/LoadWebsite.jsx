import React from 'react'
import ReactDOM from 'react-dom'

const LoadWebsite = (Component) =>{
    class _LoadWebsite extends React.Component{
        constructor(props) {
            super(props)
        
            this.state = {
                 labe: "Run"
            }
            this.state.handleClick = this.handleClick.bind(this)
        }

        getUrl(){
            return 'https://facebook.github.io/react/docs/top-level-api.html'

        }

        handleClick(event){
            let iframe = document.getElementById('frame').src = this.getUrl
        }

        componentDidUpdate(){
            console.log(ReactDOM.findDOMNode(this))
        }

        rendre(){
            console.log(this.state)
            return <Component {...this.state} {...this.props}/>
        }
    }
    _LoadWebsite.displayName = 'EnhancedComponent'
    return _LoadWebsite
}

export default LoadWebsite