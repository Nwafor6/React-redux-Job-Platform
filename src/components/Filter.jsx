import React, {Component} from 'react'

class  Filter extends Component {
    state={
        Items:[]
    }

  render(){
    const handleCloseBtn=(id)=>{
        document.getElementById(id).style.display="none"
    }
        const FilterHoder=this.props.Item
        const item = FilterHoder ? (
            FilterHoder.map((item)=>{
                return(
                    <div className="filter-body" id={item}>
                        <div className="filter-title" key={Math.random()}><span>{item}</span></div>
                        <div className="filter-close"><span onClick={()=>{handleCloseBtn(item)}}><i className="bi bi-x-square-fill">xx</i></span></div>
                    </div>
                )
            })

        ): null

    return (

      <>
        {item}
    </>
    )
  }
  }
 

export default Filter
