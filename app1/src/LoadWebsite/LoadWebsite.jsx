import React from 'react'

export default function LoadWebsite(Component) {

    class _LoadWebsite extends Component {
        constructor(props) {
            super(props)
        
            this.state = {
                 Label: 'Run'
            }
            this.state.handleClick = this.handleClick.bind(this)
        }

        getUrl(){
            return 'https://myfirstbusiness.ru/'
        }

        handleClick(event){
            let iframe = document.getElementById('frame').src = this.getUrl()
        }

        componentDidMount(){
           
        }
        
        render() {
            return (
                <Component {...this.state} {...this.props} />
            )
        }
    }
    _LoadWebsite.displayName = 'EnhancedComponent'
    return _LoadWebsite

}
